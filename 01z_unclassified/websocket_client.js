const WebSocketClient = require('websocket').client;

const client = new WebSocketClient();

client.on('connectFailed', (error) => {
  console.log(`Connect Error: ${error.toString()}`);
});

client.on('connect', (connection) => {
  console.log('WebSocket Client Connected');
  // connection.pong('');
  // connection.ping('');
  connection.sendUTF('7338EF4A5D626CC68CC4B410DA78FC6F000003');
  // connection.sendBytes(new Buffer());

  connection.on('error', (error) => {
    console.log(`Connection Error: ${error.toString()}`);
  });


  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      console.log(`Received: '${message.utf8Data}'`);
    }
  });

  connection.on('close', () => {
    console.log('Connection Closed');
  });

  function sendNumber() {
    if (connection.connected) {
      const number = Math.round(Math.random() * 0xFFFFFF);
      connection.sendUTF(number.toString());
      setTimeout(sendNumber, 1000);
    }
  }
  sendNumber();
});

const headers = {
  'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
  Host: 'pshudws.365lpodds.com',
  Origin: 'https://mobile.bet365.es',
  'Sec-WebSocket-Version': 13,
  pstk: '7338EF4A5D626CC68CC4B410DA78FC6F000003',
  gstk: 'B234F289171F3CA4AE5DA986441A4E6B000003',

};

client.connect('wss://pshudws.365lpodds.com/zap/'
  , 'zap-protocol-v1'
  , 'https://mobile.bet365.es'
  , headers, '');
