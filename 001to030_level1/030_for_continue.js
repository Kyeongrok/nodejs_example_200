const studentList = [
  { name: 'kyeongrok', age: 31, score: 85 },
  { name: 'jihyun', age: 31, score: 95 },
  { name: 'minsup', age: 35, score: 76 },
];

for (const student of studentList) {
  if (student.score > 90) {
    console.log(student);
    continue;
  }
  console.log('hello');
}
