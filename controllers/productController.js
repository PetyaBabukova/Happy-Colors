const { Router } = require('express');
const productService = require('../services/productService');
const { validateProduct } = require('./helpers/productHelpers')

const router = Router();

router.get('/products', (req, res) => {
    let products = productService.getAll();

    res.render('product-list', { title: 'Products', products });
});


router.get('/products/create', (req, res) => {
    res.render('create', { title: 'Create' })
});

router.post('/products/create', validateProduct, (req, res) => {
    productService.create(req.body, (err) => {
        if (err) {
            return res.status(500).end()
        }
        res.redirect('/products');
    });


});

router.get('/products/:productId/details', (req, res) => {
    console.log(req.params.productId);
    let product = productService.getOne(req.params.productId)
    res.render('product-details', { title: 'Details', product });
});



module.exports = router;