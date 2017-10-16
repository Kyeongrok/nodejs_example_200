// 1초에 1번씩 'hello'출력하기
const playInterval = setInterval(() => console.log('hello'), 1000);

setTimeout(() => { clearInterval(playInterval); }, 5000);
