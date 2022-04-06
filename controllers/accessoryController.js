const { Router } = require('express');
const accessoryService = require('../services/accessoryService');

const router = Router();

router.get('/accessories', (req, res) => {
    accessoryService.getAll()
        .then(products => {
            res.render('list', { title: 'Accessories', products })
        })
        .catch(()=> res.status(500).end()) 

})

router.get('/accessories/create', (req, res) => {
    res.render('createAccessory', { title: 'Create Accessory' })
});

//TODO: Validate incomming data (middleware ore just validate)
router.post('/accessories/create', (req, res) => {
    accessoryService.create(req.body)
        .then(() => res.redirect('/accessories'))
        .catch(() => res.status(500).end());
})

module.exports = router;