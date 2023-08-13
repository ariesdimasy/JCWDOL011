class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true);
  }
  eat() {
    return `${this.name} sedang makan`;
  }
}

class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false);
  }
  fly() {
    return `${this.name} sedang terbang`;
  }
}

let rabbit1 = new Rabbit("Labi", 2);
let eagle1 = new Eagle("Elo", 4);

console.log(rabbit1);
console.log(eagle1);
