"strict mode";
// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const result = arr.concat(arr2);
// console.log(result);

// console.log([...arr2, ...arr]);
// console.log([arr2, arr]);

// person = { name: "aries", age: 32 };

// address = { street: "sesame street", number: 32 };

// console.log({ ...person, ...address });
// console.log({ person, address });
console.log(this);
function hello() {
  console.log(this);
}

const hello2 = () => "hello";

hello();
console.log(hello2());
