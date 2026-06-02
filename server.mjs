import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const port = 4173;
const root = process.cwd();
const types = {
  ".css": "text/css",
  ".html": "text/html",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript",
  ".png": "image/png",
  ".webp": "image/webp",
};

createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requestedPath = url.pathname === "/" ? "gear.html" : url.pathname.replace(/^\/+/, "");
  const filePath = normalize(join(root, decodeURIComponent(requestedPath)));

  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "Content-Type": types[extname(filePath)] || "text/plain" });
  createReadStream(filePath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Number Gear is running at http://127.0.0.1:${port}`);
});
