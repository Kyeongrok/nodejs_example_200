const students = [
  { name: 'kyeongrok', age: 31, math: 85, english: 87 },
  { name: 'jihyun', age: 31, math: 95, english: 97 },
  { name: 'minsup', age: 35, math: 76, english: 84 },
  { name: 'dasom', age: 24, math: 84, english: 73 },
  { name: 'yuna', age: 26, math: 54, english: 67 },
  { name: 'mattheue', age: 29, math: 34, english: 100 },
];

const mathUpper80 = students.filter(student => student.math > 80);
const mathUpper80AndEnglishUpper70 = students
  .filter(student => student.math > 90 && student.english > 70);

console.log('mathUpper80:', mathUpper80);
console.log('mathUpper80AndEnglishUpper70:', mathUpper80AndEnglishUpper70);
