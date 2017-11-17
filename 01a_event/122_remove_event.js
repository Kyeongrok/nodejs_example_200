// 이벤트 삭제
const reMoveUncaught = () => {
  console.log('이벤트에 대한 리스너를 제거 합니다.');
  process.removeListener('uncaughtException', reMoveUncaught);
};

// process 객체에 exit 이벤트 연결
process.on('exit', (code) => {
  console.log(`exit 이벤트 발생 code:${code}`);
});

process.on('uncaughtException', reMoveUncaught);

// 예외를 발생
let count = 0;
const test = function () {
  count += 1;
  if (count > 2) { return; }
  // 예외를 강제로 발생
  setTimeout(test, 2000);
  err.error.error();
};

setTimeout(test, 2000);
