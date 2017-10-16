function sum(a, b) {
  return a + b;
}

const printResult = (result) => {
  console.log('결과는 ', result, '입니다.');
};

const calculationAndPrint = (calculationResult, callback) => {
  callback(calculationResult);
};

calculationAndPrint(sum(10, 20), printResult);
