// 정규표현식으로 replace하기
const string = '<h1>:::특별가 - 99,000원:::</h1>';

const replacedColon = string.replace(/:::/g, '');
const replacedHTag = replacedColon.replace(/<.{0,1}h1>/g, '');
const replacedSpace = replacedHTag.replace(/ /g, '');
const replacedKorean = replacedSpace.replace(/[가-힣]/g, '');
const replacedHyphen = replacedKorean.replace(/-/g, '');
console.log(replacedColon);
console.log(replacedHTag);
console.log(replacedSpace);
console.log(replacedKorean);
console.log(replacedHyphen);

/*
  정규표현식을 이용해 문자열에서 내가 필요한 부분만 골라낼 수 있다.
  /<정규표현식>/g 이런 형식을 사용하면 문자열 전체에서 해당 부분을 찾을 수 있다.
 */