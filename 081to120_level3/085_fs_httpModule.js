// fs모듈과 httpmodule 같이 써서사용 하기
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const instream = fs.createReadStream('./testoutput.txt');
  instream.pipe(res);
});
server.listen(7001, '127.0.0.1');
