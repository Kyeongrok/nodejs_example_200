const listener = () => {
  console.log('예외 이벤트 발생');
};

process.on('uncaughtException', listener);

setTimeout(() => {
  console.log('이벤트 제거');
  process.removeListener('uncaughtException', listener);
}, 6000);

setInterval(() => process.emit('uncaughtException'), 2000);
