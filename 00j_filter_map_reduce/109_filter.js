const ages = [11, 12, 13, 16, 21, 31];

const upper16 = ages.filter(age => age > 16);
const under13 = ages.filter(age => age < 13)
const between12And21 = ages.filter(age => age > 12 && age < 21);

console.log('upper16:', upper16);
console.log('under13:', under13);
console.log('between12And21:', between12And21);
