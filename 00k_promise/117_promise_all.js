const promiseFirst = new Promise(resolve => resolve(1))
  .then(result => `${result + 10}`);

const promiseSecond = new Promise(resolve => resolve(1))
  .then(result => `${result + 20}`);

Promise.all([promiseFirst, promiseSecond]).then(result => console.log(result));
