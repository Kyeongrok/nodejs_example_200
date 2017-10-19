const testFolder = './';
const fs = require('fs');

fs.readdirSync(testFolder).forEach((fileName) => {
  console.log(fileName);
});
