const abs1 = Math.abs('-1'); // 1
const abs2 = Math.abs(-2); // 2
const abs3 = Math.abs(null); // 0
const abs4 = Math.abs(''); // 0
const abs5 = Math.abs([]); // 0
const abs6 = Math.abs([2]); // 2
const abs7 = Math.abs([1, 2]); // NaN
const abs8 = Math.abs({}); // NaN
const abs9 = Math.abs('string'); // NaN
const abs10 = Math.abs(); // NaN

console.log('abs1:', abs1);
console.log('abs2:', abs2);
console.log('abs3:', abs3);
console.log('abs4:', abs4);
console.log('abs5:', abs5);
console.log('abs6:', abs6);
console.log('abs7:', abs7);
console.log('abs8:', abs8);
console.log('abs9:', abs9);
console.log('abs10:', abs10);
