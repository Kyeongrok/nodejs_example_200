// define
const printHello = () => console.log('hello'); // {}중괄호를 쓰지 않아도 된다.
const printHello2 = () => 'hello2'; // hello2를 return한다.
const printMessage = message => console.log(message);
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;

// print
printHello();
console.log(printHello2());
printMessage('message');
console.log('plus : %d', plus(10, 20));
console.log('minus : %d', minus(10, 20));
