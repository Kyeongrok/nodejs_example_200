const string = '<h1>특별가 - </h1><h2>99,000원</h2>';
const replaceH1 = string.replace(/<.{0,1}h1>/g, '');
const replaceHTag = string.replace(/<.{0,1}h.>/g, '');

console.log(replaceH1);
console.log(replaceHTag);
