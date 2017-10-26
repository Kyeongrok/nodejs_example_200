// 201709_JJH
// P.153
// 익스프레스로 웹 서버 만들기

const express = require('express');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), () => {
  console.log(`express server start :${app.get('port')}`);
});
