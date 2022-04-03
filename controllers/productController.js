const { Router } = require('express');
const productService = require('../services/productService');
const { validateProduct } = require('./helpers/productHelpers')

const router = Router();

router.get('/products', (req, res) => {
    productService.getAll()
    .then(products => {
        res.render('product-list', { title: 'Products', products });
    })
    .catch(()=> res.status(500).end()) 

});

router.get('/products/create', (req, res) => {
    res.render('create', { title: 'Create' })
});

router.post('/products/create', validateProduct, (req, res) => {
    productService.create(req.body)
    .then(() => res.redirect('/products'))
    .catch(()=> res.status(500).end()) 
});

router.get('/products/:productId/details', async (req, res) => { 
    // console.log(req.params.productId);
    let product = await productService.getOne(req.params.productId)
    res.render('product-details', { title: 'Details', product })
    
});

module.exports = router;