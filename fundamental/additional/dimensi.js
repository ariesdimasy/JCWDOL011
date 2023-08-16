// string dua dimensi
/*
    o
    oo
    ooo
    oooo
    ooooo

        o
       oo
      ooo
     oooo
    ooooo

*/

// coba di refactoring
function cube(n) {
  // 2 * n ( n = 3 => 2 * 3 = 6)
  // n pangkat 2 ( 3 * 3 = 9)
  let row = ""; //
  for (var i = 0; i < n; i = i + 1) {
    row = "";
    for (var j = 0; j < n; j = j + 1) {
      row = row + "o"; // ooo
    }
    console.log(row); // ooo
  }
}

function rectangle(x, y) {
  let row = "";
  for (let i = 0; i < y; i++) {
    row = "";
    for (let j = 0; j < x; j++) {
      row = row + "o";
    }
    console.log(row);
  }
}

function triangle(n) {
  let row = ""; // oo
  for (let i = 1; i <= n; i++) {
    row = "";
    for (let j = 0; j < i; j++) {
      row = row + "o"; // oo
    }
    console.log(row); // oo
  }
}

// cube(5);
cube(3);
rectangle(8, 4);
triangle(5);
/*
    string penampung = "ooo" + "o" sebanyak n
    console.log(string penampung)

    ooooo
    ooooo
    ooooo
    ooooo
    ooooo

    ooo
    ooo
    ooo
*/
