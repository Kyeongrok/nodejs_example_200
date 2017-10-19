const request = require('request');


request({
  url: 'https://www.google.co.kr/search?q=%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC+%EC%98%A4%ED%94%BC%EC%8A%A4%ED%85%94&oq=%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC+%EC%98%A4%ED%94%BC%EC%8A%A4%ED%85%94&aqs=chrome..69i57.5308j0j9&sourceid=chrome&ie=UTF-8',
  method: 'GET',
  headers: [
    { name: 'content-type', value: 'application/x-www-form-urlencoded' },
    { name: 'accept-encoding', value: 'utf-8' },
  ],
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10,
},
(error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body);
  } else {
    console.log(`error${response.statusCode}`);
  }
});

