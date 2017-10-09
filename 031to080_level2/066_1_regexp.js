const string = '<h1>:::특별가 - 99,000원:::</h1>';
const result1 = string.replace(/<h1>/g, '');
console.log('result1:', result1);

const result2 = string.replace(/<h1>/g, '').replace(/<\/h1>/g, '');
console.log('result2:', result2);
