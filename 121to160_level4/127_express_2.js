const express = require('express');

const app = express();

app.use((request, response) => {
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

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
