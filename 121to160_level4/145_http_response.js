require('http').createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('Hello World!');
}).listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});