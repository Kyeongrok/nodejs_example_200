const sign1 = Math.sign([3]); //  1
const sign2 = Math.sign(-3); // crawler.js
const sign3 = Math.sign('-3'); // crawler.js
const sign4 = Math.sign(3/-0); //  0
const sign5 = Math.sign(NaN); // NaN
const sign6 = Math.sign('foo'); // NaN
const sign7 = Math.sign(); // NaN

console.log('sign1:', sign1);
console.log('sign2:', sign2);
console.log('sign3:', sign3);
console.log('sign4:', sign4);
console.log('sign5:', sign5);
console.log('sign6:', sign6);
console.log('sign7:', sign7);