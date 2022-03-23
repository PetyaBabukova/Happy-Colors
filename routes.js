const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res)=>{
    res.render('about-us');
});

router.get('/contacts', (req, res)=>{
    res.render('contacts');
});

router.get('/search', (req, res)=>{
    res.render('search');
});

router.get('/dolls', (req, res)=>{
    res.render('product-list');
});

router.get('/details', (req, res)=>{
    res.render('product-details');
});

router.get('/cart', (req, res)=>{
    res.render('cart');
});

router.get('/checkout', (req, res)=>{
    res.render('checkout');
});

router.get('/order-success', (req,res)=>{
    res.render('mail-success');
});

module.exports = router;