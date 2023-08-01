/*
    mesen ke restoran 
    nasi goreng dan jus jeruk 

    pelayan kalian 
    nasi goreng dan jus jeruk
    
    ( false ) dan ( true )

    result 
    salah ( false )

    && dan 

    || atau 


    true && false = false 
    false && false = false 
    true && true = true 

    true || false = true 
    true || true = true 
    false || false = false 
*/

if (true || false) {
  console.log("dieksekusi ? ");
}

let num = 4;

// range
if (num >= 1 && num <= 5) {
  console.log(" angka di range 1 sampai 5");
} else {
  console.log("bukan range 1 - 5");
}

let value = 79;

switch (true) {
  case value >= 90 && value <= 100: // true === value >= 90 && value <= 100
    console.log("A");
    break;
  case value >= 80 && value <= 89: // true === false
    console.log("B");
    break;
  case value >= 65 && value <= 79: // true === true
    console.log("C");
    break;
  case value >= 50 && value <= 64:
    console.log("D");
    break;
  case value >= 0 && value <= 49:
    console.log("E");
    break;
  default:
    console.log("nilai tidak valid");
}

// 3n , 10n , (6n)2
// 1n
