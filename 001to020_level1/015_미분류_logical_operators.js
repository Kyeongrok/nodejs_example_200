const studentList = [
  { name: 'kyeongrok', age: 31, score: 85 },
  { name: 'jihyun', age: 31, score: 95 },
  { name: 'minsup', age: 35, score: 76 },
];

const kyeongrok = studentList[0].age > 30 && studentList[0].score >= 90;
const jihyun = studentList[1].age > 30 && studentList[1].score >= 90;
const minsup = studentList[2].age > 30 || studentList[2].score >= 90;

console.log('kyeongrok: age > 30 and score >= 90 | ', kyeongrok);
console.log('jihyun: age > 30 and score >= 90 | ', jihyun);
console.log('minsup: age > 30 or score >= 90 | ', minsup);
