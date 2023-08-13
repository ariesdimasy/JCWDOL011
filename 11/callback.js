let result;

function greet(str) {
  result = str;
}

function hello() {
  greet("hello");
}

function arigatou() {
  greet("arigatou");
}

arigatou();
hello();
console.log(result);

function calculator(a, b, callback) {
  callback(a + b);
}

function displayer(something) {
  console.log(something);
}

calculator(5, 5, displayer);

let arr = [1, 4, 2, 7];

function cb(a, b) {
  return a - b;
}

arr.sort(() => {
  return a - b;
});

console.log(arr);

// proses 1 3
// proses 2 4
// proses 3 2

console.log(Math.floor(3.0));

// concurrentcy ;
// 1 server <--- 100 request
// 100 request ini dimasukkan kedalam queue
