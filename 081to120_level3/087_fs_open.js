const fs = require('fs');

const data = fs.readFileSync('./message.txt');
const string = data.toString();
console.log('sync work01');
console.log(string);

fs.readFile('./message.txt', (err, data) => {
  if (err) throw err;
  console.log('async work01');
  console.log(data.toString());
});
