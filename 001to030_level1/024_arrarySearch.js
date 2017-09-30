// 배열 선언
const destinationName = [
  '런던',
  '로마',
  '파리',
  '암스테르담',
];

const length = destinationName.length;

const serchDestination = '파리';

for (let i = 0; i < length; i++) {
  if (serchDestination === destinationName[i]) { console.log(`${serchDestination}입니다`); }
}
