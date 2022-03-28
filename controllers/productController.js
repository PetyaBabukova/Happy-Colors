const { Router } = require('express');

const router = Router();

router.get('/products', (req, res) => {
    res.render('product-list', { title: 'Products' });
});

router.get('/products/details', (req, res) => {
    res.render('product-details', { title: 'Details' });
});

module.exports = router;