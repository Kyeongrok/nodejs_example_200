const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer((request, response) => {
  let pathname = url.parse(request.url);
  pathname = url.parse(request.url).pathname;

  if (pathname === '/') {
    fs.readFile('./138_index.html', (error, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
      console.log(url.parse(request.url));
    });
  } else if (pathname === '/example') {
    fs.readFile('./136_example.html', (error, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
      console.log(url.parse(request.url));
    });
  }
}).listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});
