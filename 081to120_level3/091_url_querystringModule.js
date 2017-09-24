// 201709_JJH url
//  URL주소와 요청 파라미터 그리고 요청 파라미터 확인하기
let url = require('url');
let querystrying = require('querystring');

// 주소를 URL 객체로 만듬
let urlAddress = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=nodejs+%EB%9E%80');

// URL 객체를 문자열로 만들기
let urlStr = url.format(urlAddress);

console.log('url 주소 : %s', urlStr );
console.log(urlAddress);

let queryValue = querystrying.parse(urlAddress.query);

console.log('질문 : %s', queryValue.query);
console.log('요청 한 질의 값 :%s', querystrying.stringify(queryValue));
