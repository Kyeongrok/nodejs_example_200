// 201709_JJH / modernweb P.71
// 내장 모듈 중 os 모듈에 대해서 살표 봅니다. 차후에 모듈은 내장과 외장 모듈 구분해서
// 정리할 필요가 있을 듯
// os 모듈은 애플리케이션을 만들때 많이 활용 됩니다.

let os = require('os');

console.log('운영체제 이름:' + os.type());
console.log('운영체제 플랫폼:' + os.platform());
console.log('운영체제 호스트 이름:' + os.hostname());
console.log('운영체제 버전:' + os.release());
console.log('CPU 정보');
console.log(os.cpus());
console.log('네트워크 인터페이스 정보');
console.log(os.networkInterfaces());
console.log('시스템 총 메모리:' + os.totalmem());
console.log('시스템 사용 가능한 메모리:' + os.freemem());
console.log('운영체제 실행된 시간:' + os.uptime());
console.log('운영체제의 아키텍처:' + os.arch());
