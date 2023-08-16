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

function main(person) {
  //   console.log(person.name);
  //   console.log(person.hobbies);
  //   const personName = person.name;
  //   const hobbies = person.hobbies;
  const { name, hobbies, address, secret } = person;
  const [a, b] = [10, 20];

  console.log("name => ", name);
  console.log("hobbies => ", hobbies);
  console.log("a => ", a);
  console.log("b => ", b);
  console.log(secret);
}

main(person);
