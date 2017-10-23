const http = require('http');

http.createServer((request, response) => {
  // GET cookie
  if (request.headers.cookie) {
    const cookie = request.headers.cookie.split(';').map((element) => {
      element = element.split('=');
      return {
        name: element[0],
        value: element[1],
      };
    });
    response.end(`<h1>${JSON.stringify(cookie)}</h1>`);
  } else {
    // SET cookie
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Set-Cookie': ['soju = grilledPork', 'beer = chicken'],
    });
    // cookie output
    response.end(`<h1>${'쿠키 생성함'}</h1>`);
  }
}).listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});
