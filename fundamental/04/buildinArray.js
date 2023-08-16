let a = ["a", "b", "c", "b", "d"];
console.log(a.toString());

let numbers = [4, 2, 1, 5, 10, 8, 100, 56];
//[2, 4, 1, 5, 10, 8, 100, 56];     a
//[2 ,4, 1, 5,10,8,100,56] b

console.log(numbers.sort((a, b) => a - b));

let str = "sudah makan pulang";
console.log(str.split(" "));

const res = a.map((i) => {
  return i + 2;
}); // dari arra ke array
// [kopi, susu, wedang] --> gula
//[kopi+gula, susu+gula, wedang+gula]

a.forEach((element) => {
  console.log(" do domething else ==>", element);
});

console.log(res);

const resFind = a.find((e) => {
  return e === "b";
}); // ketemu satu berhenti

const resFindIndex = a.findIndex((e) => {
  return e === "b";
}); // ketemu satu , munculkan dia index ke berapa

const resFilter = a.filter((e) => {
  return e === "b";
}); // dari array ke array lagi

console.log(resFind, resFindIndex);

console.log(resFilter);
