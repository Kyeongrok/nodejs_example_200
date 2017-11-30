process.on('exit', () => {
  console.log('exit 이벤트 발생');
});

process.on('uncaughtException', () => {
  console.log('uncaught 예외 이벤트 발생');
});

process.emit('exit');
process.emit('uncaughtException');
process.emit('exit');
process.emit('uncaughtException');

process.exit();

process.emit('exit');
process.emit('uncaughtException');
