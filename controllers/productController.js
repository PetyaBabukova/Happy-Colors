const { Router } = require('express');
const { json } = require('express/lib/response');
const uniqid = require('uniqid');
const Product = require('../models/Product');

const router = Router();

router.get('/products', (req, res) => {
    res.render('product-list', { title: 'Products' });
});

router.get('/products/details', (req, res) => {
    res.render('product-details', { title: 'Details' });
});

router.get('/products/create', (req, res) => {
    res.render('create', { title: 'Create' })
});

router.post('/products/create', (req, res) => {
    //TODO: validate data! 
    let data = req.body

    let product = new Product(
        uniqid(),
        data.name,
        data.description,
        data.mainImageUrl,
        data.price
        );

    console.log(product);
    res.redirect('/products');

});

module.exports = router;