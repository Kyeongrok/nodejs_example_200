// 201709_JJH fs모듈과 httpmodule 같이 써서사용 하기

let http = require('http');
let fs = require('fs');
let server = http.createServer(function(req,res){

  let instream = fs.createReadStream('./testoutput.txt');
  instream.pipe(res)
});
server.listen(7001,'127.0.0.1');
