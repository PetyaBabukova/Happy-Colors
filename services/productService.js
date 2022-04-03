const Product = require('../models/Product');

async function getAll() {
    let products = await Product.find({}).lean();
    // console.log(products);
    return products;

}

function create(data) {
    let product = new Product(data);
    return product.save();
};

async function getOne(_id) {
    let product = await Product.findById(_id).lean();
    
    return product;
}

module.exports = {
    getAll,
    getOne,
    create
}