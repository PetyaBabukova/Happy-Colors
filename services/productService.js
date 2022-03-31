const uniqid = require('uniqid');
const Product = require('../models/Product');
const fs = require('fs');

let productsData = require('../config/products.json')

function getAll() {
    return productsData;
}


function create(data){
    let product = new Product(
        uniqid(),
        data.name,
        data.description,
        data.mainImageUrl,
        data.price
        );

        productsData.push(product);
        console.log(productsData);

        //absolute path!
        fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsData), (err)=>{
            if (err) {
                console.log(err);
            };
            return
        })
};

module.exports = {
    getAll,
    create
}