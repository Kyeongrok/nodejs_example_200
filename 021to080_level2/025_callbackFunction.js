function sum(a, b, callback) {
  const result = a + b;

  callback(result);
}

// 콜백 함수
const resultSum = sum(10, 20, function() {
  console.log('a + b를 더했습니다.');
});

resultSum;