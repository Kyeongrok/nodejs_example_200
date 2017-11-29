const sqrt1 = Math.sqrt(9); // 3
const sqrt2 = Math.sqrt(1);  // 1
const sqrt3 = Math.sqrt(0);  // 0
const sqrt4 = Math.sqrt(-1); // NaN

const cbrt1 = Math.cbrt(-8); // -2
const cbrt2 = Math.cbrt(0); // 0
const cbrt3 = Math.cbrt(1); // 1
const cbrt4 = Math.cbrt(-2/0); // Infinity

console.log('sqrt1:', sqrt1);
console.log('sqrt2:', sqrt2);
console.log('sqrt3:', sqrt3);
console.log('sqrt4:', sqrt4);
console.log('cbrt1:', cbrt1);
console.log('cbrt2:', cbrt2);
console.log('cbrt3:', cbrt3);
console.log('cbrt4:', cbrt4);