class Product {
  static productList = []; // gudang

  constructor() {
    this.productName;
    this.price;
    //productList.push(this)
  }

  get getProductName() {
    return this.productName;
  }

  set setProductName(productName) {
    this.productName = productName;
  }

  set setPrice(price) {
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.cart = [];
    this.total = 0;
  }
  addTocart(productName, qty) {
    // nyari barang di gudang pabrik
    for (let item of Product.productList) {
      //console.log(item)
      if (productName == item.productName) {
        let priceTotal = item.price * qty;
        let itemOrder = {
          ...item,
          quantity: qty,
          total: priceTotal,
        };
        this.cart.push(itemOrder);
        this.total = this.total + priceTotal;
        //this.total = this.total.toLocaleString();
        return;
      }
    }

    console.log("barang tidak ada , mohon mencari barang yg ada aja");
  }

  get showTotal() {
    return this.total;
  }

  get checkout() {
    Object.freeze(this);
    return this;
  }
}

// =========== mainkan ===========

let product1 = new Product();
product1.setProductName = "RTX 3060";
product1.setPrice = 6000000;

let product2 = new Product();
product2.setProductName = "Aerocool ATX tower";
product2.setPrice = 500000;

Product.productList.push(product1, product2);

//console.log(Product.productList);

let trans1 = new Transaction(); // nota baru
trans1.addTocart("RTX 3060", 40);
//trans1.addTocart("RTX 4090", 1);
console.log(" trans1 => ", trans1);

let trans2 = new Transaction();
trans2.addTocart("Aerocool ATX tower", 2);
trans2.addTocart("RTX 3060", 3);

// console.log("trans2 => ", trans2.showTotal);
// console.log("trans2 => ", trans2.checkout);

// trans2.addTocart("RTX 3060", 1);
console.log(" trans2 => ", trans2);
