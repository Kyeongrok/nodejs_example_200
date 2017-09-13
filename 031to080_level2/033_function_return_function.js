// 함수 선언식(Function declaration)
function printMessage(message) {
  console.log(message);
}

// 함수 표현식(Function expression)
const printWelcome = function () {
  console.log('welcome');
};

printMessage('bye');
printWelcome();

console.log('typeof printMessage : %s', typeof printMessage);
console.log('typeof printWelcome : %s', typeof printWelcome);

// 괄호를 쓰지 않음
const pm = printMessage;
pm('good morning');
console.log('typeof pm : %s', typeof pm);
