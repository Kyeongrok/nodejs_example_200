
function getPower(value) {
  value *= value;
  if (value < 200) {
    return value;
  }
  getPower(value);
}

getPower(2);
