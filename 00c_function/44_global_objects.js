// Process
console.log(process.env);           // 컴퓨터 환경과 관련 정보를 가진 객체
console.log('--------------');
console.log(process.arch);          // 프로세서의 아키텍쳐
console.log('--------------');
console.log(process.uptime());      // 현재 프로그램이 실행된 시간
console.log('--------------');
console.log(process.memoryUsage()); // 메모리 사용 정보를 가진 객체
console.log('--------------');
console.log(process.version);       // Node.js 버전
console.log('--------------');
console.log(process.versions);      // Node.js 버전

// Console
console.log('Number: %d + %d = %d', 1, 2, 3+4);
console.log('String: %s', 'Hello World!');
console.log('JSON: %j', { name: 'node.js' });
console.log('String1', 'String2.');


// Console 전역객체 & Process

 // console객체의 log()는 콘솔 화면에 문자열을 출력하는 메소드
 // argv : 프로세스를 실행할때 전달되는 파라미터 정보
console.dir(process.argv);

// console객체의 dir() 메소드를 사용하면 객체가 가지고 있는 속성을 그대로 출력
// 실행되는 파일의 수를 나타 냄
console.dir(process.argv.length);

if (process.argv.length > 3){
  console.log('process.argv[3], 4번째 배열안에 값 : %s', process.argv[3]);
}

// argv에 있는 모든 값을 하나씩 출력하고 싶다면 forEach()을 사용합니다.
// forEach()메소드는 배열 안에 인덱스와 값을 함께 전달함
process.argv.forEach(function(item, index){
  console.log(index + ' : ', item);
});
