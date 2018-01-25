const multiple5 = x => x * 5;
const add10 = x => x + 10;

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;

// (20 + 10) * 5
console.log(multiple5(add10(20)));

// (10 + 20) - 40
console.log(minus(plus(10, 20), 40));
