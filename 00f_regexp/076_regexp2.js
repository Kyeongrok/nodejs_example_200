const string = '(<h1>:::특별가 - 99,000원:::</h1>)';

const replacedBracket = string.replace(/[()]/g, '');
const replacedBracketOrSlashHyphenComma = string.replace(/[()/\-,]/g, '');

console.log('바꾸기 전 ---->', string);
console.log('()없애기 ---->', replacedBracket);
console.log('/-없애기 ---->', replacedBracketOrSlashHyphenComma);
