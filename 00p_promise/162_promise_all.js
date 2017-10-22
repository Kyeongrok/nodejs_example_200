const promiseList = [Promise.resolve(1), Promise.resolve(2)];

Promise.all(promiseList)
  .then(data => console.log(data));
