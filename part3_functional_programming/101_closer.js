function grandParent(g1, g2) {
  const g3 = 3;
  return function parent(p1, p2) {
    const p3 = 33;
    return function child(c1, c2) {
      const c3 = 333;
      return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
    };
  };
}

const parentFunction = grandParent(1, 2);
const childFunction = parentFunction(11, 22);
console.log(childFunction(111, 222));
// 1 + 2 + 3 + 11 + 22 + 33 + 111 + 222 + 333 == 738
