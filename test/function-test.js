const listEmployee = [
  { name: 'kyeongrok', age: 31, salary: 4000 },
  { name: 'jihyun', age: 31, salary: 5000 },
  { name: 'minsup', age: 35, salary: 6000 },
];

const raisedSalarylist = [];
for (employee of listEmployee) {
  raisedSalarylist.push(employee.salary + employee.salary * 0.1);
}
for (salary of raisedSalarylist) {
  console.log('salary : %d', salary);
}
