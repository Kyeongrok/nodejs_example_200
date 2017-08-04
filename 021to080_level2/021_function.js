"use strict";
debugger;

function printHello(){
    console.log("hello");
}

//함수 선언식(Function declaration)
function printMessage(message){
    console.log(message);
}

//함수 표현식(Function expression)
var printWelcome = function(){
    console.log("welcome");
};

printHello();
printMessage("bye");
printWelcome();

console.log(typeof printMessage);
console.log(typeof printWelcome);


/*
    function을 선언하는데는 여러가지 방법이 있다.

 */


