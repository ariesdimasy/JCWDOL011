function add(x, y) {
  return x + y;
}

console.log(add(4, 5)); // 9
console.log(add(10, 23)); // 33

function mySplit(str, needle) {
  console.log(str.split(needle));
}

mySplit("Aries   Dimas Yudhistira", "  ");
mySplit("Aries Dimas Yudhistira", " ");
