const { Router } = require('express');

const router = Router();

router.get('/cart', (req, res) => {
    res.render('cart', { title: 'Cart' });
});

router.get('/checkout', (req, res) => {
    res.render('checkout');
});

module.exports = router;