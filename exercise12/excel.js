function excel(alphabet) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = 0;
  // pangkat
  for (var i = 0; i < alphabet.length; i++) {
    let findAphaNumber = 0;
    let temp = 0;
    for (var j = 0; j < alphabets.length; j++) {
      if (alphabets[j] == alphabet[i]) {
        findAphaNumber = j + 1;
        break;
      }
    }

    // console.log("findAlphaNumber => ", findAphaNumber);

    temp = findAphaNumber * Math.pow(26, alphabet.length - i - 1);
    //console.log("temp => ", temp);
    result += temp;
  }

  return result;
}

console.log(excel("B")); // 2
console.log(excel("Z")); // 26
console.log(excel("AA")); // 27
console.log(excel("AL")); // 38 (26) + ( 1 * 12 )
console.log(excel("AZ")); // 52 (26) + ( 1 * 26 )
console.log(excel("ZZ")); // 702
console.log(excel("ABC")); // 731 (26 * 26 * 1) + (26 * 2  ) + (1 * 3 )
console.log(excel("ARIES"));

console.log(excel("B") == 2 ? "SUCCESS" : "FAILED");
console.log(excel("Z") == 26 ? "SUCCESS" : "FAILED");
console.log(excel("AA") == 27 ? "SUCCESS" : "FAILED");
console.log(excel("ABC") == 731 ? "SUCCESS" : "FAILED");

foobar() == "foobar" ? "SUCCESS" : "FAILED";
// 676             + 52         + 3
// 703
/* 

(1 X 26^2) + (2 X 26^1) + (3 X 26^0)

A - Z = 26 
AA - ZZ ( 26 * 26 ) = 676 => 676 + 26 = 702 
AAA - ZZZ ( 26 * 26 * 26 ) + ( 26 * 26 ) + 26 = 18278
AAAA - ZZZZ ( )


*/
