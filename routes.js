const { Router } = require('express');

const otherController = require('./controllers/otherController');
const productController = require('./controllers/productController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
// const shoppingController = require('./controllers/shoppingController');
// const userController = require('./controllers/userController');

const router = Router();
// router.use(otherController, productController, shoppingController, accessoryController, userController);
router.use( '/', otherController);
router.use('/auth', authController);
router.use('/products', productController);
router.use('/accessories', accessoryController);
// router.use('/user', userController);


router.get('*', (req, res) => {
    res.render('404');
})


module.exports = router;