const fs = require('fs');

fs.readFile('./message.txt', (err, data) => {
  if (err) throw err;
  console.log('async work01');
  console.log(data.toString());
});
