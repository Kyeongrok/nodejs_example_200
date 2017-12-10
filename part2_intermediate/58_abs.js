const abs1 = Math.abs('crawler.js'); // 1
const abs2 = Math.abs(-3.141592); // 3.141592
const abs3 = Math.abs([2]); // 2
const abs4 = Math.abs([1, 2]); // NaN
const abs5 = Math.abs({}); // NaN
const abs6 = Math.abs(null); // 0
const abs7 = Math.abs(''); // 0
const abs8 = Math.abs([]); // 0

console.log('abs1:', abs1);
console.log('abs2:', abs2);
console.log('abs3:', abs3);
console.log('abs4:', abs4);
console.log('abs5:', abs5);
console.log('abs6:', abs6);
console.log('abs7:', abs7);
console.log('abs8:', abs8);