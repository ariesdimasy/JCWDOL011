let welcome = "";
let name = "";
let age = 17;

// if (name != "") {
//   welcome = "Welcome " + name;
// } else {
//   welcome = "please input your name";
// }
// welcome = name != "" ? "Welcome " + name : "please input your name";

// if (age >= 17) {
//   welcome = "you are adult";
// } else {
//   welcome = "you are young";
// }
welcome = age >= 17 ? "you are adult" : name != "" ? "" : "";

console.log(welcome);
