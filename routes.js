const { Router } = require('express');
const router = Router();

const otherController = require('./controllers/otherController');
const productController = require('./controllers/productController');
const shoppingController = require('./controllers/shoppingController');

router.use(otherController, productController, shoppingController);

router.get('*', (req, res) => {
    res.render('404');
})

module.exports = router;