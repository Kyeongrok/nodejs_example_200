const asinh1 = Math.asinh(1); // 0.881373587019543
const asinh2 = Math.asinh(0); // 0
const asinh3 = Math.asinh(-1); // -0.881373587019543

const acosh1 = Math.acosh(-1); // NaN
const acosh2 = Math.acosh(0); // NaN
const acosh3 = Math.acosh(1); // 0

const atanh1 = Math.atanh(-1); // -Infinity
const atanh2 = Math.atanh(0); // 0
const atanh3 = Math.atanh(2); // NaN

console.log('asinh1:', asinh1);
console.log('asinh2:', asinh2);
console.log('asinh3:', asinh3);
console.log('acosh1:', acosh1);
console.log('acosh2:', acosh2);
console.log('acosh3:', acosh3);
console.log('atanh1:', atanh1);
console.log('atanh2:', atanh2);
console.log('atanh3:', atanh3);