const numbers = [1, 2, 3, 2, 4, 5];

const newNumber = new Set(numbers);

console.log(newNumber);

const people = ["Aries", "Dimas", "Galih", "Ratna", "dimas", "Wuling", "Dimas"];

const newPeople = new Set(people);

newPeople.add("Topan");
newPeople.add("Aries");
newPeople.add("galih");

console.log(newPeople.has("raisa"));

// newPeople.clear();

console.log(newPeople);

// const goodPeople = [
//   {
//     name: "Dimas",
//     age: 16,
//   },
//   {
//     name: "Galih",
//     age: 18,
//   },
//   {
//     name: "Ratna",
//     age: 19,
//   },
//   {
//     name: "Galih",
//     age: 18,
//   },
//   {
//     name: "Susan",
//     age: 30,
//   },
// ];

// const newGoodPeople = new Set(goodPeople);

// console.log(newGoodPeople);
