const sumNumber = (start, end, accumulator) => {
  if (start > end) return accumulator;
  return sumNumber(start + 1, end, accumulator + start);
};

console.log('result:', sumNumber(1, 10, 0));
