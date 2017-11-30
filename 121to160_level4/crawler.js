const request = require('request');
const iconv = require('iconv-lite');
const charset = require('charset');

const crawl = callback => queryString => request({
  url: 'https://www.google.com/search',
  encoding: null,
  method: 'GET',
  qs: queryString,
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10,
},
(error, response, body) => {
  if (!error && response.statusCode === 200) {
    const enc = charset(response.headers, body);
    const decodedResult = iconv.decode(body, enc);
    callback(decodedResult);
  } else {
    console.log(`error${response.statusCode}`);
  }
});

module.exports.crawl = crawl;
