const uniqid = require('uniqid');
const Product = require('../models/Product');
const fs = require('fs/promises');
const path = require('path');

let productsData = require('../config/products.json')

function getAll() {
    return productsData;
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

    productsData.push(product);

    //absolute path!

    return fs.writeFile(
        path.join(__dirname, '/../config/products.json'),
        JSON.stringify(productsData),

    )
};

function getOne(id) {
    return productsData.find(x => x.id == id);
}

module.exports = {
    getAll,
    getOne,
    create
}