// const people = [];

// people.push("Aries");
// people.push("Gilang");
// people.push("Ratna");

// console.log(people);

// people.shift();
// people.shift();
// people.shift();
// people.shift();

// console.log(people);

class Queue {
  #container = [];

  enqueue(element) {
    this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }

  getElement() {
    return this.#container;
  }
}

let q1 = new Queue();

q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);

console.log(q1.getElement());

q1.dequeue();

console.log(q1.getElement());
