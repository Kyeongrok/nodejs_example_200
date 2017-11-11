const fibonacci = (num) => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

for (let i = 1; i < 10; i += 1) {
  console.log(fibonacci(i));
}
