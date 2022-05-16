const Accessory = require('../models/Accessory');
const Product = require('../models/Product');

async function getAll(query, category) {
    let products = await Product.find({}).lean();
    let accessories = await Accessory.find({}).lean();

    if (query.name) {
        // products = await Product.find({name: query.name}).lean(); //this doesn`t work!
        products = products.filter(x => x.name.toLowerCase().includes(query.name.toLowerCase()))
        accessories = accessories.filter(x => x.name.toLowerCase().includes(query.name.toLowerCase()))
        products.concat(accessories)
    }
    

    return products.concat(accessories);

}



function create(data) {
    let product = new Product(data);
    return product.save();
};

async function getOne(_id) {
    let product = await Product.findById(_id).lean();
    return product;
}

function getOneWithAccessories(id) {
    return Product.findById(id)
        .populate('accessories')
        .lean()
}

async function attachAccessory(productId, accessoryId) {
    let product = await Product.findById(productId);
    let accessory = await Accessory.findById(accessoryId)

    product.accessories.push(accessory);
    return product.save();
}



module.exports = {
    getAll,
    getOne,
    create,
    attachAccessory,
    getOneWithAccessories,

}