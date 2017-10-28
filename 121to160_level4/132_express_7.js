const express = require('express');

const app = express();

app.get('/', (request, response) => {
  const result = [];
  const multipleNumber = 9;
  for (let i = 1; i < 5; i++) {
    result.push({
      number: `${multipleNumber}X${i}`,
      multiple: multipleNumber * i,
    });
  }
  response.send(result);
});

app.get('/error', (request, response) => {
  response.status(404).send('404 ERROR');
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
