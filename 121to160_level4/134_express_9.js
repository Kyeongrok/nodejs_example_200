// cookie parser
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set', (request, response) => {
  console.log('Set Cookie 호출');
  response.cookie('user', {
    id: '0070',
    name: 'brian',
    authorized: true,
  });
  response.redirect('/get');
});

app.get('/get', (request, response) => {
  console.log('Get Cookie 호출');
  response.send(request.cookies);
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
