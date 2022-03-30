const { Router } = require('express');

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
    console.log(req.body);

    res.redirect('/products');

});

module.exports = router;