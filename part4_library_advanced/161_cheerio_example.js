const cheerio = require('cheerio');
const crawler = require('./crawler');

const parse = (decodedResult) => {
  // console.log(decodedResult);
  const $ = cheerio.load(decodedResult);
  const titles = $('h3.r').find('a');
  for (let i = 0; i < titles.length; i += 1) {
    const title = $(titles[i]).text();
    console.log(title);
  }
};

crawler.crawl(parse)({ q: '서울대입구역 맛집' });
