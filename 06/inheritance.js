class BangunDatar {
  luas;
  keliling;
  constructor() {
    this.luas;
    this.keliling;
  }
}

class Lingkaran extends BangunDatar {
  radian;
  constructor(radian) {
    super();
    this.radian = radian;
  }

  computeLuas() {
    this.luas = 3.14 * this.radian * this.radian;
  }

  computeKeliling() {
    this.keliling = 3.14 * 2 * this.radian;
  }

  set setRadian(radian) {
    this.radian = radian;
  }

  get getRadian() {
    return this.radian;
  }
}

class Persegi {}

let lingkaran1 = new Lingkaran(10);
lingkaran1.computeKeliling();
lingkaran1.computeLuas();

// lingkaran1.setRadian = 10;

console.log(lingkaran1);

class Product {
  constructor(productName, price) {
    this.price = price;
    this.productName = productName;
  }
}

class Book extends Product {
  constructor(productName, price) {
    super(productName, price);
    this.author;
  }

  set setAuthor(author) {
    this.author = author;
  }

  get getAuthor() {
    return this.author;
  }
}

let book1 = new Book("Pengenalan Sistem Informasi", 100000);
book1.setAuthor = "Aries Dimas";

console.log(book1);

console.log(book1 instanceof Book);
console.log(book1 instanceof Product);
console.log(lingkaran1 instanceof Lingkaran);
console.log(lingkaran1 instanceof BangunDatar);
console.log(book1 instanceof Lingkaran);
console.log(lingkaran1 instanceof Book);
