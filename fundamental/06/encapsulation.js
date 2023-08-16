class Person {
  #name = ""; // property public . access modifier nya adalah public
  age = 0;
  #secret = "ini rahasia"; // property private
  constructor(name, age) {
    console.log("constructor here");
    this.#name = name;
    this.age = age;
    console.log(this.#secret);
  }

  setName(name) {
    if (name) {
      this.#name = name;
    } else {
      console.log("nama harus diisi");
    }
  }

  getName() {
    return this.#name;
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

rian.setName("Rock D Xebec");
rian.setName("");
console.log(rian.getName());

// rian.name = "Rock D Xebec";

console.log(rian);
