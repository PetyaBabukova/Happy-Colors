const uniqid = require('uniqid');
const Product = require('../models/Product');
const productData = require('../data/productData')


function getAll() {
    return Product.getAll();
}

function create(data) {
    let product = new Product(
        uniqid(),
        data.name,
        data.category,
        data.description,
        data.mainImageUrl,
        data.price
    );
        return product.save()

    // return productData.create(product)
};

function getOne(id) {
   
    return Product.getOne(id)
}

module.exports = {
    getAll,
    getOne,
    create
}