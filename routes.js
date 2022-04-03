const { Router } = require('express');
const router = Router();

const otherController = require('./controllers/otherController');
const productController = require('./controllers/productController');
const shoppingController = require('./controllers/shoppingController');
const accessoryController = require('./controllers/accessoryController');

router.use(otherController, productController, shoppingController, accessoryController);
// router.use( '/', otherController);
// router.use('/products', productController);
// router.use('accessories', accessoryController);


router.get('*', (req, res) => {
    res.render('404');
})


module.exports = router;