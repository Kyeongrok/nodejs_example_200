// 이벤트 강제 발생

// process 객체에 exit 이벤트 연결
process.on('exit', (code) => {
  console.log('exit 이벤트 발생');
});

process.on('uncaughtException', (err) => {
  console.log('uncaught 예외 이벤트 발생');
});

process.emit('exit');
process.emit('uncaughtException');
process.emit('exit');
process.emit('uncaughtException');

process.exit();

process.emit('exit');
process.emit('uncaughtException');
