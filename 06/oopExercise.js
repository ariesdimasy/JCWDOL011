class Product {
  static productList = [];

  constructor() {
    this.name = "";
    this.price = 0;
  }

  set setProductname(name) {
    this.name = name;
  }

  get getProductname() {
    return this.name;
  }

  set setPrice(price) {
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.productCart = [];
  }

  addToCart(productObj, qty) {}

  showTotal() {
    return this.total;
  }

  checkoutMethod() {}
}

let product1 = new Product();
product1.setProductname = "Mouse Logitech B100";
product1.setPrice = 90000;

let product2 = new Product();
product2.setProductname = "Keyboard Logitech K100";
product2.setPrice = 100000;

Product.productList.push(product1, product2);

console.log(Product.productList);
