const request = require('request');

request({
  url: 'https://www.google.com/search',
  encoding: null,
  method: 'GET',
  qs: { q: '신사역 맛집' },
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10,
},
(error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.toString());
  } else {
    console.log(`error${response.statusCode}`);
  }
});

