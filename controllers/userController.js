const { Router } = require('express');
const userService = require('../services/userService')

const router = Router();

router.get('/user/checkout', (req, res) => {
    res.render('checkout');
});

router.get('/userdata',(req, res)=>{
    res.render('userData')
})

router.post('/user/checkout', async (req, res)=>{
    let user = await userService.getData(req.body)
    res.render('userData', {title: 'User Data', user})
})


module.exports = router;