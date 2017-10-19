const fs = require('fs');

const openFileAndPrint = path => fileName => fs.readFile(path + fileName, (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

const thisDirOpenFileAndPrint = openFileAndPrint('./');
const otherDirOpenFileAndPrint = openFileAndPrint('../');

thisDirOpenFileAndPrint('110_sum.js');
otherDirOpenFileAndPrint('package.json');
