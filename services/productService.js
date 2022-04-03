const Product = require('../models/Product');
const productData= require('../data/productData')

function getAll() {
    return productData.getAll();
}

function create(data) {
    let product = new Product(data);
    
    // return productData.create(product)
    return product.save();
};

function getOne(id) {
   return productData.getOne()
}

module.exports = {
    getAll,
    getOne,
    create
}