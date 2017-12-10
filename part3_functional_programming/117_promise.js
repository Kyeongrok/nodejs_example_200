const promiseResult = new Promise((resolve) => {
  resolve(1); // 핵심은 첫번째는 resolve() 를 쓴다는 것.
}).then((result) => {
  console.log('first:', result);
  return `${result}hello`;
}).then((result) => {
  console.log('second:', result);
  return `${result}nello`;
});

promiseResult.then(result => console.log(result));
