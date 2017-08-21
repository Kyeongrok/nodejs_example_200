// 콜백함수(초안, 보완필요)

function sum(a, b, callback){
  let result = a + b;

  callback();
  return result;
}

// 콜백 함수
let r = sum(10, 20, function(){
  console.log('a + b를 더했습니다.');
});
