const os = require('os');

console.log(`운영체제 이름:${os.type()}`);
console.log(`운영체제 플랫폼:${os.platform()}`);
console.log(`운영체제 호스트 이름:${os.hostname()}`);
console.log(`운영체제 버전:${os.release()}`);
console.log('CPU 정보');
console.log(os.cpus());
console.log('네트워크 인터페이스 정보');
console.log(os.networkInterfaces());
console.log(`시스템 총 메모리:${os.totalmem()}`);
console.log(`시스템 사용 가능한 메모리:${os.freemem()}`);
console.log(`운영체제 실행된 시간:${os.uptime()}`);
console.log(`운영체제의 아키텍처:${os.arch()}`);

