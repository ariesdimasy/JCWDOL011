console.log("palindrome");

// dimas samid

let str = "kasur ini rusak".toLowerCase(); // rusak => kasur == rusak
let result = ""; // kas

for (let i = str.length - 1; i >= 0; i--) {
  //console.log(" i => ", i, str[i]);
  result = result + str[i]; // ka + s
  //console.log(result, "when i => ", i);
}

console.log(result == str ? "palindrome" : "not palindrome");

console.log("remove first occurance");

let haystack = "Hello World";
let needle = "ell";

let result2 = "";

for (let k = 0; k < haystack.length; k++) {
  for (let j = 0; j < needle.length; j++) {
    if (
      needle[j] === haystack[k] &&
      needle[j + 1] === haystack[k + 1] &&
      needle[j + 2] === haystack[k + 2]
    ) {
      console.log("ketemu");
      continue;
    } else {
      result2 = result2 + haystack[k];
    }
  }
}

console.log(result2);

console.log("sensor huruf ");

let sensor = "a";
let sentence = "saya pergi makan";
let result3 = "";

for (let l = 0; l < sentence.length; l++) {
  if (sentence[l] == sensor) {
    result3 = result3 + "*";
  } else {
    result3 = result3 + sentence[l];
  }
}

console.log(result3);

console.log("sorting of 3 number ");

let a = 4;
let b = 7;
let c = 2;

if (a > b && a > c) {
  if (b > c) {
    //console.log("1.", a, b, c);
    console.log(c, b, a);
  } else if (c > b) {
    //console.log("2.", a, c, b);
    console.log("2.", b, c, a);
  }
} else if (b > a && b > c) {
  if (a > c) {
    // console.log("3.", b, a, c);
    console.log("3.", c, a, b);
  } else if (c > a) {
    console.log("4.", b, c, a);
  }
} else if (c > a && c > b) {
  if (a > b) {
    console.log("5.", c, a, b);
  } else if (b > a) {
    console.log("6.", c, b, a);
  }
}

console.log("find the largest of 2 given integers");

let number1 = 5;
let number2 = 5;

if (number1 > number2) {
  console.log(number1, " is the largest");
} else if (number2 > number1) {
  console.log(number2, " is the largest");
} else {
  console.log("numbers are same");
}
