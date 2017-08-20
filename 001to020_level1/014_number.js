//define
let order1 = {no:1, productName:"티셔츠", price:"30000"};
let order2 = {no:2, productName:"청바지", price:"45000"};
let order3 = {no:3, productName:"shoes", price:"55.70"};
let order4 = {no:4, productName:"sunglass", price:"120.80"};

//operation
let concatenate = order1['price'] + order2['price'];
let sum1 = parseInt(order1['price']) + parseInt(order2['price']);
let sumParseInt = parseInt(order3['price']) + parseInt(order4['price']); //소수점 없어짐
let sumNumber = Number(order3['price']) + Number(order4['price']);

//print
console.log("order1['price'] + order2['price'] : %s", concatenate);
console.log("parseInt(order1['price']) + parseInt(order2['price']) : %s", sum1);
console.log("parseInt(order3['price']) + parseInt(order4['price']) : %s",sumParseInt);
console.log("Number(order3['price']) + Number(order4['price']) : %s", sumNumber);