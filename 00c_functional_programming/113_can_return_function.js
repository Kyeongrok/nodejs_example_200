const returnFunction = () => (a, b) => a + b;

const plus = returnFunction();

console.log(plus(10, 20));
