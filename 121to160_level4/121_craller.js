const client = require('cheerio-httpcli');

const url = 'http://www.google.com/';
const param = {};

client.fetch(url, param, (err, $, res) => {
  if (err) { console.log('error:', err); return; }

  const body = $.html();

  console.log(body);
});

