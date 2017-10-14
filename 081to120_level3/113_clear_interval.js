playInterval = setInterval(() => console.log('hello'), 1000); // 1초에 1번씩 'hello'출력하기

setTimeout(function() {clearInterval(playInterval)}, 5000);