// Promise로 단계별로 실행하기
// 이렇게 하면 promise를 한개만 만들어서 .then으로 순차적으로 처리할 수 있다.
new Promise((resolve) => {
  resolve(1); // 핵심은 첫번째는 resolve() 를 쓴다는 것.
}).then((result) => {
  console.log('first:', result);
  return `${result}hello`;
}).then((result) => {
  console.log('second:', result);
  return `${result}nello`;
});
