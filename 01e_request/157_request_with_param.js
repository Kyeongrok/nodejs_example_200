const request = require('request');
const iconv = require('iconv-lite');
const charset = require('charset');

request({
  url: 'https://www.google.com/search',
  encoding: null,
  method: 'GET',
  qs: { q: 'hello' },
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10,
},
(error, response, body) => {
  if (!error && response.statusCode === 200) {
    const enc = charset(response.headers, body);
    const iResult = iconv.decode(body, enc);
    console.log(iResult);

  } else {
    console.log(`error${response.statusCode}`);
  }
});

