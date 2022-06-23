const { Router } = require('express');
const User = require('../models/User');


const router = Router();


// router.get('/checkout', (req, res) => {
//     res.render('checkout',  {title: 'Checkout'});
// });

// router.post('/checkout', async (req, res)=>{
//     let user = await userService.getData(req.body)
//     res.render('userData', {title: 'User Data', user})
// });

// router.get('/userdata', (req, res) => {
//     // console.log(req.query);
//     res.render('userData', { title: 'User Data', user: req.query })
// });

// router.post('/userdata', (req, res) => {
//     // console.log(req.body);
//     // res.end()
//     userService.create(req.body)
//         .then(() => res.redirect('/products'))

// });

// router.post('/shoppingconformation', (req, res)=>{
//     console.log(req.body);
//     res.end()
// })


module.exports = router;