
const express = require('express');
const http = require('http');

const app = express();

app.use((request, response, next) => {
  console.log('first middleware request');

  response.writeHead('200', { 'Content-Type': 'text/html;charset=uft8' });
  response.end('<h1>express server response</h1>');
});

http.createServer(app).listen(3000, () => {
  console.log('express server started from 3000 port');
});
