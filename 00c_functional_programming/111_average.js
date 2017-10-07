const scores = [85, 95, 76];

const average = (list, total, length) => {
  if (length === list.length) return total / length;
  return average(list, total + list[length], length + 1);
};

console.log('average:', average(scores, 0, 0));
