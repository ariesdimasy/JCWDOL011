const multiply = (x, y) => {
  //console.log("this => ", this);
  return x * y;
};

const multiply2 = function (x, y) {
  //console.log("this => ", this);
  return x * y;
};

console.log(multiply(6, 7));
console.log(multiply2(6, 3));

console.log(isNaN(5 * "a"));
console.log(isNaN(5 * 5));
