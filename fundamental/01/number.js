let age = 32.45;

console.log(age);
// age = age.toString()
// age = age.toExponential();
age = age.toFixed();

console.log(age);

let salary = "9000000";

console.log(typeof Number(salary));
MAX_VALUE = 10;
console.log(MAX_VALUE);

console.log(String(1_000_000_000_000_000));

console.log(Boolean("hello"));
console.log(Boolean("world"));
console.log(Boolean("")); // false

console.log(Boolean(1));
console.log(Boolean(200));
console.log(Boolean(0)); // false

let panjang = 10;
let lebar = 5;
let anotherNumber = -10;
console.log(panjang + lebar);
console.log(panjang * lebar);
console.log(panjang - lebar);
console.log(panjang / lebar);
console.log(panjang % lebar); // 10 / 5 = 2
// 10
// 0
console.log(7 % 2); // 7 / 2 = 3
// 6
// 1

console.log(5 ** 3);

console.log(-panjang);
console.log(-anotherNumber);

console.log("2" + 2);
console.log(2 + "2");
console.log(2 ** "2");
console.log("2" ** 2);
console.log(2 * "2");
console.log("2" * 2);

let num = 16;
num = num + 10;
num += 4; // num = num + 4
console.log(num);

console.log(num++, "<= postfix"); // num += 1 // 31
console.log(num);
num--; // num -= 1 // 30

console.log(++num, "<= prefix");

console.log(num);

console.log(6 > 7);
console.log(7 >= 7);
console.log(7 == 7);
console.log(7 == "7");
console.log(7 === "7");

console.log(!false);
console.log(!true);

console.log(6 != 6);
console.log(6 != 7);
