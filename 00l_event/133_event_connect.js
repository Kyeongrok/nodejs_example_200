// 이벤트 연결

const fs = require('fs');

// process 객체에 exit 이벤트 연결
process.on('exit', (code) => {
  console.log('exit 이벤트 발생');
});

process.on('uncaughtException', (err) => {
  console.log('uncaught 예외 이벤트 발생');
  fs.writeSync(1, `Caught exception: ${err}\n`);
});

setTimeout(() => {
  console.log('This will still run');
}, 500);

// 예외를 발생
let count = 0;
const test = function () {
  count += 1;
  if (count > 2) {
    return;
  }
  // 예외를 강제로 발생
  setTimeout(test, 3000);
  err.error.error();
};
setTimeout(test, 3000);

