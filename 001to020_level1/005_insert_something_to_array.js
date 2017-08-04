//array에 넣을 수 있는 것들
//문자, 숫자, function, object

let ar = [];
ar.push(() => console.log("hello"));
ar.push("hello");   //문자
ar.push(1);     //숫자
ar.push([]);    // object(Array)
ar.push(new Array(10, 11)); // object(Array)

console.log(ar);
console.log(typeof(ar[3]));
console.log(typeof(ar[4]));

//function을 꺼내서 실행하는법 : 뒤에 ()를 붙힙니다.
ar[0]();