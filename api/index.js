import server from "../dist/server/server.js";

function nodeReqToWebRequest(req) {
  const protocol = (req.headers['x-forwarded-proto'] || 'https').toString();
  const host = req.headers.host || req.headers.hostname || '';
  const url = `${protocol}://${host}${req.url}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers || {})) {
    if (value === undefined) continue;
    if (Array.isArray(value)) headers.set(key, value.join(','));
    else headers.set(key, String(value));
  }

  const init = {
    method: req.method,
    headers,
    // For GET/HEAD, body must be undefined
    body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
  };

  return new Request(url, init);
}

async function sendWebResponse(res, webRes) {
  res.statusCode = webRes.status;
  for (const [key, value] of webRes.headers.entries()) {
    // Node's res.setHeader expects string or array
    res.setHeader(key, value);
  }

  try {
    const arrayBuffer = await webRes.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err) {
    // Fallback to streaming if possible
    const reader = webRes.body?.getReader?.();
    if (!reader) {
      res.end();
      return;
    }
    const stream = new ReadableStream({
      start(controller) {
        function push() {
          reader.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }
            controller.enqueue(value);
            push();
          }).catch(() => controller.error());
        }
        push();
      }
    });
    const nodeStream = stream.pipeTo?.();
    res.end();
  }
}

export default async function handler(req, res) {
  try {
    const webReq = nodeReqToWebRequest(req);
    const webRes = await server.fetch(webReq);
    await sendWebResponse(res, webRes);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
