const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  fs.readFile('socket.html', (error, data) => {
    response.writeHead(200, { 'Context-Type': 'text/html' });
    response.end(data);
  });
});

const io = require('socket.io')(server);

io.on('connection', (client) => {
  console.log('Client connection');

  client.on('disconnect', () => {
    console.log('Client disconnection');
  });
});

server.listen(3000, () => {
  console.log('Server is running port 3000!');
});

