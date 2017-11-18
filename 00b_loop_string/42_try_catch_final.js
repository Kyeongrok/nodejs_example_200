const printHello = () => console.log('hello');

try {
  printHello();
} catch (e) {
  console.error(e);
} finally {
  console.log('finally1');
}

try {
  printBye();
} catch (e) {
  console.error(e);
} finally {
  console.log('finally2');
}

