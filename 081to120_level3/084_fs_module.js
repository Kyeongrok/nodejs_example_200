const fs = require('fs');

const data = fs.readFileSync('../test_data/2017-09-04.txt');
const string = data.toString();
console.log(string);

