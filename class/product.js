class Product
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }
    getPriceInfo()
    {
        return `The price of ${this.name} is ${this.price}.`;
    }
}

const product = new Product("iphone", 84000);
console.log(product.getPriceInfo());