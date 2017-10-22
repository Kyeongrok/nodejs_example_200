const request = require('request');

const url = 'http://openapi.epost.go.kr/postal/retrieveNewAdressAreaCdService/retrieveNewAdressAreaCdService/getNewAddressListAreaCd';
let queryParams = `?${encodeURIComponent('ServiceKey')}=16E5%2BiYt63XN6f03DOjZTlQxHA3NeaAwk8rOgLemIi4fMuxcjYmqZTJKBScBX4eadVuIBU%2FoC9JSGLmOtRe9bQ%3D%3D`; /* Service Key */
queryParams += `&${encodeURIComponent('searchSe')}=${encodeURIComponent('dong')}`; /* dong : 동(읍/면)명 road :도로명[default] post : 우편번호 */
queryParams += `&${encodeURIComponent('srchwrd')}=${encodeURIComponent('주월동 408-1')}`; /* 검색어 */
queryParams += `&${encodeURIComponent('countPerPage')}=${encodeURIComponent('10')}`; /* 페이지당 출력될 개수를 지정 */
queryParams += `&${encodeURIComponent('currentPage')}=${encodeURIComponent('1')}`; /* 출력될 페이지 번호 */

request({
  url: url + queryParams,
  method: 'GET',
}, (error, response, body) => {
  console.log('Status', response.statusCode);
  console.log('Headers', JSON.stringify(response.headers));
  console.log('Reponse received', body);
});
