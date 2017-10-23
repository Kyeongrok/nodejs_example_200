const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((request, response) => {
  const get = url.parse(request.url, true).query;

  if (request.method === 'GET') {
    fs.readFile('./example_2.html', (error, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
      console.log(`${request.method}방식의 요청입니다`);
    });
  } else if (request.method === 'POST') {
    request.on('data', (data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
      console.log(`${request.method}방식의 요청입니다`);
    });
  }
}).listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});
