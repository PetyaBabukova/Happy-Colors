const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');
const { validateProduct } = require('./helpers/productHelpers')

const router = Router();

router.get('/products', (req, res) => {
    productService.getAll(req.query)
    .then(products => {
        res.render('product-grids', { title: 'Products', products });
       
    })
    .catch(()=> res.status(500).end()) 

});

router.get('/products/create', (req, res) => {
    res.render('createProduct', { title: 'Create Product' })
});

router.post('/products/create', (req, res) => {
    productService.create(req.body)
    .then(() => res.redirect('/products'))
    .catch(()=> res.status(500).end()) 
});

router.get('/products/:productId/details', async (req, res) => { 
    // console.log(req.params.productId);
    let product = await productService.getOneWithAccessories(req.params.productId);
    // console.log(product);

    res.render('details', { title: 'Details', product })
    
});

router.post('/products/:productId/details', (req, res)=>{
    console.log(req.body);
});

router.get('/products/:productId/attach', async (req, res)=>{
    let product = await productService.getOneWithAccessories(req.params.productId); 
    let accessories = await accessoryService.getAllUnattached(product.accessories);
    res.render('attachAccessory', {title: 'Attach accessory', product, accessories});
});

router.post('/products/:productId/attach', (req, res)=>{
    productService.attachAccessory(req.params.productId, req.body.accessory)
    .then(() => res.redirect(`/products/${req.params.productId}/details`) )
    
})

module.exports = router;