const scores = [85, 95, 76];

const sum = (list, total, length) => {
  if (length === list.length) return total;
  return sum(list, total + list[length], length + 1);
};

console.log('sum:', sum(scores, 0, 0));
