// body parser 미들웨어

// 모듈 불러오기
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

// express 객체 생성
const app = express();

// application/x=www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));

// application/json 파싱
app.use(bodyParser.json());

app.get('/', (requrest, response) => {

});

app.get('/login', (requrest, response) => {

});

app.post('/login', (requrest, response) => {

});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
