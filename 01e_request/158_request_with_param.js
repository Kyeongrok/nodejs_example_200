const request = require('request');

request({
  url: 'https://www.google.com/search',
  method: 'GET',
  qs: { q: '신사역 맛집' },
}, (error, response, body) => console.log(body));
