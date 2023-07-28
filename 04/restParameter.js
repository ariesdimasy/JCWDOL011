function myFunc(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log("rest ==> ", rest.toString());
}

myFunc("satu", "dua", "tiga", "empat", "lima");
