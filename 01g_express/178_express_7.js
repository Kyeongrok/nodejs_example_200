// router 미들웨어
const express = require('express');

const app = express();

app.get('/one', (request, response) => {
  response.send('<a href="/two">Street 200</a>');
});

app.get('/two', (request, response) => {
  response.send('<a href="/one">Street 100</a>');
});

app.get('/three/:number', (request, response) => {
  const streetNumber = request.params.number;
  response.send(`${streetNumber}Street`);
});

app.get('/four/:number', (request, response) => {
  const aveNumber = request.params.number;
  response.send(`${aveNumber}Ave`);
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
