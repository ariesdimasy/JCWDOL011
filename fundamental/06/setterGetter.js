let car = {
  merk: "bmw",
  hello: function () {
    console.log(this.merk);
  },
};

console.log(car.merk);
car.hello();

let person = {
  name: "Dimas",
  age: 32,
  "personal-info": "web developer",
  hobbies: ["Rocket League", "Genshin Impact"],
  address: {
    city: "Tangerang",
    houseNumber: 30,
  },
  // setter
  set fullName(name) {
    this.name = name;
  },
  get fullName() {
    return "Aries " + this.name;
  },
  greeting() {
    console.log("hello stranger");
  },
  walk: () => {},
};

person.fullName = "Yudhistira";
console.log(person.name);
console.log(person.fullName);
