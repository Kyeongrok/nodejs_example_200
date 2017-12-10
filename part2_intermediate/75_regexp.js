const string = '<h1>:::특별가 - 99,000원:::</h1>';

const replacedColon = string.replace(/:::/g, '');
const replacedHTag = replacedColon.replace(/<.{0,1}h1>/g, '');
const replacedSpace = replacedHTag.replace(/ /g, '');
const replacedKorean = replacedSpace.replace(/[가-힣]/g, '');
const replacedHyphen = replacedKorean.replace(/-/g, '');

console.log(replacedColon); // 콜론 3개를 찾아서 바꾼 결과
console.log(replacedHTag); // h태그를 찾아서 바꿈
console.log(replacedSpace); // 공백
console.log(replacedKorean); // 한글
console.log(replacedHyphen); // -를 찾아서 바꿈

console.log(string.replace(':::', ''));
