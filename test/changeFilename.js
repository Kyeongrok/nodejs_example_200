const fs = require('fs');

const raiseNumber = (path, addedNumber, filenameList) => filenameList.forEach((filename) => {
  if (filename.indexOf('.js') <= 0) {
    console.log(filename);
    return;
  }
  const matchedNumber = filename.match(/[0-9]{3}/g);
  const matchedFilename = filename.match(/_.+/g);
  const beforeNumber = Number(matchedNumber);
  const targetNumber = beforeNumber + addedNumber;
  const targetFilename = targetNumber + matchedFilename;

  console.log(matchedNumber, matchedFilename, beforeNumber, targetNumber, targetFilename);

  fs.rename(`${path + filename}`, `${path + targetFilename}`, (err) => {
    if (err) console.log(`ERROR: ${err}`);
  });
});

const targetPath = '../01g_express/';
const filenameList = fs.readdirSync(targetPath);
raiseNumber(targetPath, 2, filenameList);

