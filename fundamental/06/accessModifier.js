class Person {
  name = ""; // property public . access modifier nya adalah public
  age = 0;
  #secret = "ini rahasia"; // property private
  constructor(name, age) {
    console.log("constructor here");
    this.name = name;
    this.age = age;
    console.log(this.#secret);
  }

  accessSecret() {
    console.log("the secret is : ", this.#secret);
  }

  static settings = {
    color: "",
    speed: 100,
  };

  static salary = 100;
  //   constructor() {
  //     console.log("constructor here");
  //   }
  static walking() {
    console.log("iam walking here");
  }
}

let rian = new Person("Rian D ikison", 33);

console.log(rian.name);
console.log(rian.secret);
rian.accessSecret();

Person.settings.color = "brown";
console.log(Person.settings.color);
console.log(Person.salary);
Person.walking();

console.log(rian.settings);
