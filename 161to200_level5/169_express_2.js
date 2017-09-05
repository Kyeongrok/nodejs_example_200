// 201709_JJH
// P.154, 미들웨어로 클라이언트 응답 보내기

 let express = require('express');
 let http = require('http');

 let app = express();

app.use(function(req, res, next){
  console.log('first middleware request');

  res.writeHead('200', {'Content-Type':'text/html;charset=uft8'});
  res.end('<h1>express server response</h1>');

});

http.createServer(app).listen(3000,function(){
  console.log('express server started from 3000 port');
});
