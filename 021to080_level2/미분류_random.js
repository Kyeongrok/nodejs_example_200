const randomNumber = Math.random();
console.log(randomNumber);

const zeroToNine = parseInt(randomNumber * 10, 10); // 0 to 9
console.log('zeroToNine:', zeroToNine);

const oneToTen = parseInt(randomNumber * 10, 10) + 1; // 1 to 10
console.log('oneToTen:', oneToTen);

/*
  난수를 생성할 일이 많다.
  특정 숫자부터 시작 하려면 뒤에 +를 해준다.
 */