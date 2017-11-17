const request = require('request');
const iconv = require('iconv-lite');

request({
  url: 'https://www.google.com/',
  method: 'GET',
  timeout: 10000,
  followRedirect: true,
},
(error, response, body) => {
  if (!error && response.statusCode === 200) {
    // console.log(body);
    const strContents = new Buffer(body, 'binary');
    console.log(iconv.decode(strContents, 'utf-8').toString());
  } else {
    console.log(`error${response.statusCode}`);
  }
});

