// define
const order1 = { no: 1, productName: '티셔츠', price: '30000' };
const order2 = { no: 2, productName: '청바지', price: '45000' };
const order3 = { no: 3, productName: 'shoes', price: '55.70' };
const order4 = { no: 4, productName: 'sunglass', price: '120.80' };

// operation
const concatenate = order1.price + order2.price;
const sum1 = parseInt(order1.price, 10) + parseInt(order2.price, 10);
const sumParseInt = parseInt(order3.price, 10) + parseInt(order4.price, 10); // 소수점 없어짐
const sumNumber = Number(order3.price) + Number(order4.price);

// print
console.log("order1['price'] + order2['price'] : %s", concatenate);
console.log("parseInt(order1['price']) + parseInt(order2['price']) : %s", sum1);
console.log("parseInt(order3['price']) + parseInt(order4['price']) : %s", sumParseInt);
console.log("Number(order3['price']) + Number(order4['price']) : %s", sumNumber);
