const user = { name: 'kyeongrok', age: 31 };
console.log('user:', user);
console.log('user.name:', user.name);
console.log('user.age:', user.age);

user.job = 'developer';
user.nation = 'korea';
console.log(user);

const fieldName = 'age';
console.log(user[fieldName]);
