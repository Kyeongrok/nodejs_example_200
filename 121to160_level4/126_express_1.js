// 201709_JJH
// P.153
// 익스프레스로 웹 서버 만들기

 let express = require('express');
 let http = require('http');

 let app = express();

 app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function(){
  console.log("express server start :" + app.get('port'));
});
