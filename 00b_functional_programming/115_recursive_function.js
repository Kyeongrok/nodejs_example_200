
function getPower(value) {
  if (value < 200) {
    return value;
  }
  return getPower(value * value);
}

console.log(getPower(2));
