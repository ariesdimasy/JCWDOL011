function clear_sentence(arr) {
  // Write your code here
  var result = [];
  var alphabetics = "abcdefghijklmnopqrstuvwxyz";
  var numerics = "0123456789";
  var marks = " !?";
  for (var i = 0; i < arr.length; i++) {
    var newString = "";
    for (var j = 0; j < arr[i].length; j++) {
      if (
        alphabetics
          .split("")
          .findIndex((item) => item.toLowerCase() == arr[i][j]) !== -1 ||
        numerics
          .split("")
          .findIndex((item) => item.toLowerCase() == arr[i][j]) !== -1 ||
        marks.split("").findIndex((item) => item.toLowerCase() == arr[i][j]) !==
          -1
      ) {
        newString += arr[i][j];
      }
    }
    result.push(newString);
  }

  return result;
}

console.log(
  clear_sentence([
    "he%l*lo, w$o(r)*l@d!",
    "a-r^e y$o#u st*)ill c*(o)d*(i@n$g?",
    "1&2%$34 i>t<s n:o}t m}y p*a*s^%sw$%o#@rd",
  ])
);

console.log(
  clear_sentence([
    "so**me %$of $y(o)u m%$ay% @d#@ie*",
    "bu&t% its o^nly sac#rifice i@am wil(ling) t$o ma*&ke",
  ])
);
