const a = 5;
const b = 6;

if (a == 5) {
  console.log(a == 5);
  console.log(a == b);
  console.log(a == '5');
}

if (a === 5) {
  console.log(a === 5);
  console.log(a === b);
  console.log(a === '5'); // equal value and equal type
}

if (a > b) {
  console.log(a > b);
}

if (a < b) {
  console.log(a < b);
}

if (a >= 5) {
  console.log(a >= 5);
  console.log(a >= b);
}

if (a <= 5) {
  console.log(a <= 5);
  console.log(a <= b);
}
