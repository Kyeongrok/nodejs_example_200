const trunc1 = Math.trunc(24.2);    // 24
const trunc2 = Math.trunc(42.8123123);    // 42
const trunc3 = Math.trunc(0.88);    //  0
const trunc4 = Math.trunc(-0.88);   // -0
const trunc5 = Math.trunc('crawler.js.123'); // crawler.js
const trunc6 = Math.trunc(NaN);      // NaN
const trunc7 = Math.trunc('foo');    // NaN
const trunc8 = Math.trunc();         // NaN

console.log('trunc1:', trunc1);
console.log('trunc2:', trunc2);
console.log('trunc3:', trunc3);
console.log('trunc4:', trunc4);
console.log('trunc5:', trunc5);
console.log('trunc6:', trunc6);
console.log('trunc7:', trunc7);
console.log('trunc8:', trunc8);