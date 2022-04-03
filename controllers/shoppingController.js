const { Router } = require('express');

const router = Router();

router.get('/shopping/cart', (req, res) => {
    res.render('cart', { title: 'Cart' });
});

router.get('/shopping/checkout', (req, res) => {
    res.render('checkout');
});

module.exports = router;