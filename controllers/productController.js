const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');

const isAuthenticated = require('../middlewares/isAuthenticated');
const isGuest = require('../middlewares/isGuest');

const router = Router();

router.get('/', (req, res) => {
    productService.getAll(req.query)
        .then(products => {
            res.render('product-grids', { title: 'Products', products });

        })
        .catch(() => res.status(500).end())

});

router.get('/create', isAuthenticated, (req, res) => {
    res.render('createProduct', { title: 'Create Product' })
});

router.post('/create', isAuthenticated, (req, res) => {
    productService.create(req.body, req.user)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end())
});

router.get('/:category', (req, res) => {
    productService.getCategory(req.params.category)
        .then((products) => res.render('product-grids', { title: 'Products', products }))
})

router.get('/:productId/details', async (req, res) => {
    // console.log(req.params.productId);
    let product = await productService.getOneWithAccessories(req.params.productId);
    res.render('details', { title: 'Details', product })
});

// router.post('/:productId/details', async (req, res) => {
//     // console.log(req.params.productId);
//     let product = await productService.getOneWithAccessories(req.params.productId);
//     res.render('details', { title: 'Details', product })
// });

router.get('/:productId/attach', isAuthenticated, async (req, res) => {
    let product = await productService.getOneWithAccessories(req.params.productId);
    let accessories = await accessoryService.getAllUnattached(product.accessories);
    res.render('attachAccessory', { title: 'Attach accessory', product, accessories });
});

router.post('/:productId/attach', isAuthenticated, (req, res) => {
    productService.attachAccessory(req.params.productId, req.body.accessory)
        .then(() => res.redirect(`/products/${req.params.productId}/details`))

});

router.get('/:productId/edit', isAuthenticated, (req, res) => {
    productService.getOne(req.params.productId)
        .then(product => {
            res.render(`editProduct`, product);
        })
});

router.post('/:productId/edit', isAuthenticated, (req, res) => {
    productService.edit(req.params.productId, req.body)
        .then(product => {
            res.redirect(`/products/${req.params.productId}/details`)
        })
        .catch(err => console.log(err))
});

router.get('/:productId/delete', isAuthenticated, (req, res) => {
    productService.getOne(req.params.productId)
        .then(product => {
            if (req.user._id != product.creator) {
                res.redirect('/products')
            } else {
                res.render('delete', product);
            }
        })
});

router.post('/:productId/delete', isAuthenticated, (req, res) => {
    productService.deleteOne(req.params.productId)
        .then(response => {
            res.redirect('/products')
        })
})

module.exports = router;