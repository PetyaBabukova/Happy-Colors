const fs = require('fs/promises');
const path = require('path');
let productsDb = require('../config/products.json');
const Model = require('./Model');

class Product extends Model {
    constructor(id, name, category, description, mainImageUrl, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.mainImageUrl = mainImageUrl;
        this.category = category;
        this.price = price;
    }
}

module.exports = Product;