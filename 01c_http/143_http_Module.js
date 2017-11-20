// http 모듈 sever 객체
// 웹 서버 생성과 실행
const http = require('http');

const server = http.createServer();

server.listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});

// 웹서버 종료
const testClose = function () {
  server.close();
  console.log('서버가 종료되었습니다, http://127.0.0.1:50000');
};

// 강제 서버종료
setTimeout(testClose, 5000);

