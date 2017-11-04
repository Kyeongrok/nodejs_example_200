// express-session 미들웨어

const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
}));

app.use((request, response) => {
  request.session.now = (new Date()).toUTCString();
  response.send(request.session);
});


app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
