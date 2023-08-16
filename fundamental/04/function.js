// function declaration
function add(x, y = 4) {
  console.log("x => ", x, " y => ", y);
  return x + y;
}

// n ini adalah parameter
function hello(n) {
  for (let i = 1; i <= n; i++) {
    // looping sebanyak 3 kali
    console.log("hello");
  }
}

function helloWorld() {
  console.log("Hello World");
  console.log("Iam PC Masterrace");
}

let sayName = function (name) {
  console.log("hello ", name);
};

console.log(add(1, 2));
console.log(add(5, 3));
console.log(add(10));

const res = add(6, 7) + 10;
console.log(res);

hello(3); // looping sebanyak 3

console.log("===========");

hello(5); // looping sebanyak 5

helloWorld();

sayName("Dimas");

console.log("a", "b", "c", "d");
