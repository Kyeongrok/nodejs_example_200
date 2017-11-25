const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  fs.readFile('socket_event.html', (error, data) => {
    response.writeHead(200, { 'Context-Type': 'text/html' });
    response.end(data);
  });
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

