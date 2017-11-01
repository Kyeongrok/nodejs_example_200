const add = x => y => x + y;
const add10 = add(10);

console.log(add10(20));
console.log(add(10)(20));
