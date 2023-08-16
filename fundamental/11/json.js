let person = {
  name: "Dimas",
  age: 23,
};

let json = JSON.stringify(person);

console.log(json);

console.log(JSON.parse(json));
