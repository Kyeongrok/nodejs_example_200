const client = require('cheerio-httpcli');

const url = 'http://openapi.epost.go.kr/postal/retrieveNewAdressAreaCdService/retrieveNewAdressAreaCdService/getNewAddressListAreaCd?ServiceKey=16E5%2BiYt63XN6f03DOjZTlQxHA3NeaAwk8rOgLemIi4fMuxcjYmqZTJKBScBX4eadVuIBU%2FoC9JSGLmOtRe9bQ%3D%3D&searchSe=road&srchwrd=세종로+17';
const param = {};

client.fetch(url, param, (err, $, res) => {
  if (err) { console.log('error:', err); return; }

  const body = $.html();

  console.log(body);
});

