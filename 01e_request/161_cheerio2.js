const request = require('request');
const iconv = require('iconv-lite');
const charset = require('charset');
const cheerio = require('cheerio');

const parse = (decodedResult) => {
  // console.log(decodedResult);
  const $ = cheerio.load(decodedResult);
  const titles = $('h3.r').find('a');
  for (let i = 0; i < titles.length; i += 1) {
    const title = $(titles[i]).text();
    console.log(title);
  }
};

const callAndParse = callback => keyword => request({
  url: 'https://www.google.com/search',
  encoding: null,
  method: 'GET',
  qs: { q: keyword },
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

callAndParse(parse)('서울대입구역 맛집');
