// 201709_JJH / For문을 사용해서 배열 조회하기, 자바스크립트 북 P.66 참고
// 배열 선언
const destinationName = [
  '런던',
  '로마',
  '파리',
  '암스테르담',
];

const length = destinationName.length();

const serchDestination = promp('도시 조회');

for (let i = 0; i < length; i++) {
  if (serchDestination === destinationName[i]) {
    console.log(`${serchDestination}입니다`);
  } else if (i === length - 1) { console.log('해당 도시가 없습니다'); }
}
