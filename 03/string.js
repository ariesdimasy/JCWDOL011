let name = "dimas"; // 0 1 2 3 4

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

name[1] = "u";

console.log(name.length);
console.log(name);

for (let i = 0; i < name.length; i = i + 1) {
  console.log(name[i]);
}
