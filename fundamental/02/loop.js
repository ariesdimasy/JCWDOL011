/*
    looping : 
    1. awalan 
    2. akhiran 
    3. step ( berapa langkah , naik atau turun )

    hitung angka 1 - 10 

*/

// i = 11
// 11 <= 10 // false
for (let i = 1; i <= 10; i = i + 1) {
  console.log("angka => ", i);
  if (i === 5) {
    break;
  }
}

// -------------------------------------------01--------10------------------------------------------------

let j = 1;
while (j <= 2) {
  console.log("j => ", j);
  j = j + 1;
}
console.log(j);

let k = 1;
do {
  console.log("hello => ", k);
  k = k + 1;
} while (k <= 2);
console.log(k);

for (let l = 1; l <= 10; l = l + 1) {
  if (l == 5) {
    continue;
  }
  console.log("angka => ", l);
}
