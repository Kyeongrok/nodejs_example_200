// 이벤트 생성

// events 모듈 사용한 방법
const events = require('events');
const createEvent = new events.EventEmitter();
// 객체를 생성합니다.

// 이벤트를 연결 합니다.
createEvent.on('tick', () => {
  console.log('직접 만든 이벤트를 실행합니다.');
});

// 이벤트를 발생
createEvent.emit('tick');

// process.EventEmitter() 방법

/* 객체를 생성합니다.
const createEvent = new process.EventEmitter();

// 이벤트를 연결 합니다.
createEvent.on('tick', () => {
    console.log('직접 만든 이벤트를 실행합니다.');
});

// 이벤트를 발생
createEvent.emit('tick');*/
