const testFolder = './';
const fs = require('fs');

const filenameList = fs.readdirSync(testFolder);

filenameList.forEach((fileName) => {
  console.log(fileName);
});
