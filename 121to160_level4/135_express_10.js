// connet-muliparty 미드웨어
const express = require('express');
const fs = require('fs');
const multipart = require('connect-multiparty');

const app = express();

app.use(multipart({ uploadDir: `${__dirname}/connect-multipart` }));

app.get('/', (request, response) => {
  fs.readFile('connect-multiparty.html', (error, data) => {
    response.send(data.toString());
  });
});

app.post('/', (request, response) => {
  console.log(request.body);
  console.log(request.files);
  response.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
