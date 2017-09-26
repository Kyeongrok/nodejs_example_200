const testFolder = './';
const fs = require('fs');

fs.readdirSync(testFolder).forEach((fileName) => {
  const data = fs.readFileSync(`./${fileName}`);
  const string = data.toString();
  console.log(string);
});
