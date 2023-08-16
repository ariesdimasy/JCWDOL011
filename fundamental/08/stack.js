// const people = ["Aries"];
// people.push("Dimas");
// people.push("Yudhistira");

// console.log(people);

// people.pop();

// console.log(people);

class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  push(element) {
    if (this.#isFull()) {
      console.log("Stack Overflow !");
      return;
    }
    return this.#container.push(element);
  }

  pop() {
    if (this.#isEmpty()) {
      console.log("Stack Underflow !");
      return;
    }
    return this.#container.pop();
  }

  getElement() {
    return this.#container;
  }

  getMaxSize() {
    return this.#maxSize;
  }
}

let stack1 = new Stack(3);

console.log(stack1.getMaxSize());

stack1.push(1);
stack1.push(2);
stack1.push(3);

console.log(stack1.getElement());

stack1.pop();
console.log(stack1.pop());
console.log(stack1.pop());
stack1.pop();
stack1.pop();

console.log(stack1.getElement());
