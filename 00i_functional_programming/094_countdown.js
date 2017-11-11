const countdown = (value) => {
  console.log('value:', value);
  if (value === 0) return value;
  return countdown(value - 1);
};

console.log('result:', countdown(20));
