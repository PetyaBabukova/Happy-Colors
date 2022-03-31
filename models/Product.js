class Product {
    constructor(id, name, category, description, mainImageUrl,  price) 
        {
        this.id = id;
        this.name = name;
        this.description = description;
        this.mainImageUrl = mainImageUrl;
        this.category = category;
        this.price = price;
    }
}

module.exports = Product;