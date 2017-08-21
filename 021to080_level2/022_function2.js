// 함수의 유효범위(Scope) 및 익명함수

// 전역 변수
let result_subtraction;
function subtraction(a, b){
  result_subtraction = a - b;
}

subtraction(100, 50);
console.log(result_subtraction);


// 변수에 익명 함수 형태로 함수를 정의할 수 있음
function multiple(a, b){
  let result = a * b;
  return result;
}

var r = multiple(10, 10);
console.log(r);


// 지역 변수
function sum(a, b){
  let result_sum = a + b;
}

sum(20, 30);
console.log(result_sum);
