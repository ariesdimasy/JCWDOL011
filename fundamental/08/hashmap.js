const person = {
  name: "dimas",
  age: 17,
  name: "Rian",
};

let count = 0;
for (let key in person) {
  count++;
}

console.log(count);

const myMap = new Map();

myMap.set("David", "001");
myMap.set("Beckam", "002");
myMap.set("David", "003");
myMap.set("david", "003");

console.log(myMap);
console.log(myMap.size);

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

console.log(myMap.get("David"));
console.log(myMap.get("david"));
