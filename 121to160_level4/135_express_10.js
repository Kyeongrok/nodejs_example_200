// connet-muliparty 미들웨어

// 모듈 추출
const express = require('express');
const fs = require('fs');
const multipart = require('connect-multiparty');

const app = express();

// 미들웨어 설정
app.use(multipart({ uploadDir: `${__dirname}/upload` }));

app.get('/', (request, response) => {
  fs.readFile('connect-multiparty.html', (error, data) => {
    response.send(data.toString());
  });
});

app.post('/', (request, response) => {
  const imgFile = request.files.image;
  const outputPath = `${__dirname}/upload/${Date.now()}_${imgFile.name}`;
  console.log(outputPath);
  console.log(request.body);
  console.log(request.files);
  fs.rename(imgFile.path, outputPath, () => {
    response.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
