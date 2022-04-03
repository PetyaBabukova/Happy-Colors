const { Router } = require('express');
const accessoryService = require('../services/accessoryService');

const router = Router();

router.get('/accessories/create', (req, res) => {
    res.render('createAccessory', { title: 'Create Accessory'})
});

//TODO: Validate incomming data (middleware ore just validate)
router.post('/accessories/create', (req, res)=>{
    accessoryService.create(req.body)
    .then(()=> res.redirect('/products'))
    .catch(()=> res.status(500).end());
}) 

module.exports = router;