const employeeList = [
  { name: 'kyeongrok', age: 31, department: 'development' },
  { name: 'jihyun', age: 31, department: 'design' },
  { name: 'minsup', age: 35, department: 'development' },
];

const developerAgeList = employeeList
  .filter(employee => employee.department === 'development')
  .map(employee => employee.age);
console.log(developerAgeList.reduce((a, b) => a + b)); // 개발팀의 나이 합계
