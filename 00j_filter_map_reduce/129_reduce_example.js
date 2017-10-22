const students = [
  { name: 'kyeongrok', age: 31, score: 85 },
  { name: 'jihyun', age: 31, score: 95 },
  { name: 'minsup', age: 35, score: 76 },
];

const scores = students.map(student => student.score);

const sum = scores.reduce((a, b) => a + b, 0);
console.log('sum:', sum);
