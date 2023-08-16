function calculator(a, b) {
  return a + b;
}

function displayer(something) {
  console.log(something);
}

function calculator2(a, b) {
  let result = a + b;

  displayer(result);
}

let result = calculator(5, 5);

displayer(result);

calculator2(4, 5);
