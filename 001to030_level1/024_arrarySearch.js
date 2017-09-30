// 배열 선언
const destinationName = [
  '런던',
  '로마',
  '파리',
  '암스테르담',
];

const serchDestination = '파리';

for (let i = 0; i < destinationName.length; i++) {
  if (serchDestination === destinationName[i]) {
    console.log(serchDestination, '입니다');
    break;
  }
}
