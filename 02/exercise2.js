let number = 10;

if (number % 2 == 0) {
  console.log("genap / even");
} else {
  console.log("ganjil / odd");
}

console.log("prime number");

let number2 = 1;
let i = 2;
let isPrime = true;
//if (number2 !== 1) {
while (i < number2) {
  if (number2 % i === 0) {
    isPrime = false;
    break;
  }
  i++;
}
// }
//else if (number2 == 1) {
//   isPrime = false;
// }

if (isPrime && number2 != 1) {
  console.log(number2, "is prime number");
} else {
  console.log(number2, " is not prime number");
}

console.log("total 1 to N");

let n = 10;
let total = 0; // 6
// 5n
for (var j = 1; j <= n; j = j + 1) {
  total = total + j; // 3 + 3
  console.log("total : ", total, " saat j = ", j);
}
console.log("total terakhir ", total);

console.log("n factorial ");

/* !5 = 5 * 4 * 3 * 2 * 1  */
// start dari n
// end to 1
// step decreasing 1 ( - 1 )
let n2 = 7;
let factorial = 1;
for (let k = n2; k >= 1; k = k - 1) {
  factorial = factorial * k;
}
console.log(factorial);

console.log("fibonacci number");

let n3 = 6;
let firstNumber = 0;
let secondNumber = 1;
let lastNumber = 0;

for (let l = 3; l <= n3; l = l + 1) {
  lastNumber = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = lastNumber;
}

console.log(lastNumber);
