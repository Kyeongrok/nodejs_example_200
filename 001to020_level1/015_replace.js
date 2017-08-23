//define
let greeting = "hello";
let dateString = "2017-08-24T11:00:00";
let smallBracket = "()";

//replace
let replacedGreeting = greeting.replace("el", "");
let replacedDateString = dateString.replace("T", " ");
let middleBracket = smallBracket.replace("(", "{").replace(")", "}");

//print
console.log("el 없애기 : %s", replacedGreeting);
console.log("T를 공백으로 : %s", replacedDateString);
console.log("() => {} : %s", middleBracket);