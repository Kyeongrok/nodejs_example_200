// 수학 점수가 가장 높은 학생 3명 알아내기
// 수학 기준으로 오름차순으로 정렬한 후
// 역순으로 바꾸어서
// 위에서 3개만 뽑기
const studentList = [
  { name: 'kyeongrok', age: 31, math: 85, english: 87 },
  { name: 'jihyun', age: 31, math: 95, english: 97 },
  { name: 'minsup', age: 35, math: 76, english: 84 },
  { name: 'dasom', age: 24, math: 84, english: 73 },
  { name: 'yuna', age: 26, math: 54, english: 67 },
  { name: 'mattheue', age: 29, math: 34, english: 100 },
];

const sorted = studentList.sort((now, next) => now.math - next.math);
console.log(sorted);
const reversed = sorted.reverse();
const sliced = reversed.slice(0, 3);
console.log('sliced:', sliced);
