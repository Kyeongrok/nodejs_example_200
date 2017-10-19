const randomNumber = Math.random(); // 0.7483689112586123
const zeroToNine = Math.floor(Math.random() * 10, 10); // 0 to 9
const twentyToThirty = Math.floor(Math.random() * ((30 - 20) + 1), 10) + 20; // 20 to 30
const oneToTen = Math.floor(Math.random() * 10, 10) + 1; // 1 to 10
const makeRandom = (min, max) => Math.floor(Math.random() * ((max - min) + 1), 10) + min;

console.log(randomNumber);
console.log('zeroToNine:', zeroToNine);
console.log('oneToTen:', oneToTen);
console.log('twentyToThirty:', twentyToThirty);

for (let value = 1; value < 10; value += 1) {
  console.log('10 to 20:', makeRandom(10, 20));
}
