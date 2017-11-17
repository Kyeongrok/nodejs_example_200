const express = require('express');

const app = express();

app.use((request, response) => {
  response.send('Hello express module');
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
