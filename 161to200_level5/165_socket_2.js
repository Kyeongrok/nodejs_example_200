const app = require('express')();
const server = require('http').createServer(app);

app.get('/', (reuquest, response) => {
  response.sendFile(`${__dirname}/socket_event.html`);
});

const io = require('socket.io')(server);

io.on('connection', (client) => {
  console.log('Client connection');

  client.on('clientmsg', (data) => {
    console.log('This is client Data:', data);
    client.emit('msg', data);
  });

  client.on('status', () => {
    console.log('status 받음');
    setInterval(() => {
      client.emit('msg2', 'Hello socket.io');
    }, 3000);
  });
});

server.listen(3000, () => {
  console.log('Server is running port 3000!');
});

