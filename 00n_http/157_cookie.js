// 쿠키생성
// 쿠키는 키와 값이 들어 있는 데이터로 이름, 값, 파기 날짜와 경로 정보가 있다.
const http = require('http');

http.createServer((request, response) => {
  const date = new Date();
  date.setDate(date.getDate() + 7);

  // cookie
  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Set-Cookie':
  [`soju = grilled pork;Expires = ${date.toUTCString()}`,
    'beer = chicken'],
  });

  // cookie output
  response.end(`<h1>${request.headers.cookie}</h1>`);
}).listen(52273, () => {
  console.log('Serer is running');
});
