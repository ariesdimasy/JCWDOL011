let person = {
  name: "Dimas",
  age: 32,
  "personal-info": "web developer",
  hobbies: ["Rocket League", "Genshin Impact"],
  address: {
    city: "Tangerang",
    houseNumber: 30,
  },
  run: function () {
    console.log("this person is running");
  },
  greeting() {
    console.log("hello stranger");
  },
  walk: () => {},
};

console.log(person);

console.log(person.address.street);
console.log(person?.address?.street?.number);

// person.address.street ? person.address.street.number : person.address.street

// console.log(person.age);
// console.log(person.hobbies[1]);
// console.log(person["name"]);
// console.log(person["personal-info"]);

// person.address.kecamatan = "parung panjang";

// person.name = "Aries Dimas";
// person.title = "Best Developer";
// delete person["personal-info"];

// console.log(person);

// person.run();

// person.greeting();

console.log(Object.keys(person));

for (let itemKey in person) {
  console.log(itemKey, " : ", person[itemKey]);
}
