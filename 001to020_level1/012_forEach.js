const listUser = [
  { name: 'kyeongrok', age: 31 },
  { name: 'jihyun', age: 31 },
  { name: 'minsup', age: 35 },
];

listUser.forEach((user) => {
  console.log(user);
});
console.log('----------------------');
// arrow function
listUser.forEach(user => console.log(user));
