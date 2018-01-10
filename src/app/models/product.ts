export class Product {
    imageUrl: string;
    price: number;
    currency: string;

    constructor(imageUrl, price, currency) {
      this.imageUrl = imageUrl;
      this.price = price;
      this.currency = currency;
    }
}
