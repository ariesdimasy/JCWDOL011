class Person {
  name = "";
  age = 0;
  constructor(name, age) {
    console.log("constructor here");
    this.name = name;
    this.age = age;
  }
  //   constructor() {
  //     console.log("constructor here");
  //   }
}

// const Person2 = class {

// }

console.log(Person);

// let dimas = new Person("Aries Dimas", 32);
let rian = new Person("Rian D ikison", 33); // ada object baru dibuat, rian
// dimas.name = "Aries Dimas";
// dimas.age = 32;
// rian.name = "Rian D ikison";
// rian.age = 33;

// console.log(rian);

let date1 = new Date("2021-09-22"); // Date adalah class bawaan js
date1.getDate();
date1.setDate();
console.log(date1);
