const abs1 = Math.abs('-1');     // 1
const abs2 = Math.abs(-2);       // 2
const abs3 = Math.abs(null);     // 0
const abs4 = Math.abs('');       // 0
const abs5 = Math.abs([]);       // 0
const abs6 = Math.abs([2]);      // 2
const abs7 = Math.abs([1,2]);    // NaN
const abs8 = Math.abs({});       // NaN
const abs9 = Math.abs('string'); // NaN
const abs10 = Math.abs();         // NaN

console.log('max :', maxResult);
console.log('min :', minResult);
