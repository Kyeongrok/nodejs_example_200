const fs = require('fs');
const request = require('./request/request');
const statsUrlFormats = require('./statsUrlFormats.js');
const parser = require('./parser/statsBasketballParser');

const getString = callback => url => request({
  url,
  method: 'GET',
  headers: [
    { name: 'content-type', value: 'application/x-www-form-urlencoded' },
    { name: 'accept-encoding', value: 'utf-8' },
  ],
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10,
},
(error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(url);
    callback(body);
  } else {
    console.log(`error${response.statusCode}`);
  }
});

// fs.writeFile('test_data/hello.txt', string);
const printJson = (string) => {
  console.log(string);
  
};

const callAndPrint = request.getString(printJson);

// setInterval(() => {
//   // 1947346, 1947369
//   ()=>{}, 5000
// });

callAndPrint(statsUrlFormats.getBasketballLiveBoxUrl(1947346));
