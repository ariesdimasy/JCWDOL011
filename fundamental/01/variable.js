let message; // mendeklarasikan variable ( declare variable )
console.log(message); // undefined

message = "its not secret"; // memberikan variable sebuah nilai ( assign value )
console.log(message);

var hobby = "rocket league";
console.log(hobby);
hobby = "gta V"; // men-assign value baru ( bukan me-mutable )
console.log(hobby);

var hobby = "genshin impact";
console.log(hobby);

let age = 32; // declare dan langsung memberikan nilai

let isMarried = true; // boolean

{
  let foo = "bar";
  {
    console.log(foo);
  }
}

const PI = 3.14;
const IP_ADDRESS = "127.0.0.1";

console.log(PI);

console.log(message);

// const class = "kelas"

let sampleNull = null;
console.log(sampleNull);
let sampleUndefined;
console.log(sampleUndefined);

console.log(typeof message);
console.log(typeof isMarried);
console.log(typeof sampleNull);
console.log(typeof sampleUndefined);
console.log(typeof PI);

let name = "Aries";
name = name + " Dimas";
console.log(name);
name[0] = "U";
