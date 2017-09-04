const client = require('cheerio-httpcli');

const url = 'https://www.digitec.ch/de/s1/producttype/tv-4?tagIds=538&take=300';
const param = {};

client.fetch(url, param, (err, $, res) => {
  if (err) { console.log('error:', err); return; }

  const body = $.html();

  console.log(body);
});


