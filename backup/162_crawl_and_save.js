const crawler = require('../part4_library_advanced/crawler');
const cheerio = require('cheerio');
const fs = require('fs');

const parse = (decodedResult) => {
  // console.log(decodedResult);
  const $ = cheerio.load(decodedResult);
  const titles = $('h3.r').find('a');
  titles.each((index, element) => {
    const title = $(element).text();
    console.log(title);
    fs.appendFile('./titles.txt', `${title}\n`);
  });
};

crawler.crawl(parse)({ q: '샤로수길 맛집' });

