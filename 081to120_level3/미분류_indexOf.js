const employeeList = [
  { name: 'kyeongrok', age: 31, department: 'development' },
  { name: 'jihyun', age: 31, department: 'design' },
  { name: 'minsup', age: 35, department: 'development' },
];

const departments = employeeList.map(student => student.department);
console.log('exist design:', departments.indexOf('design'));
console.log('exist planning:', departments.indexOf('planning'));

