const { Router } = require('express');
const User = require('../models/User');
const userService = require('../services/userService');
const { COOKIE_NAME} = require('../config/config');

const router = Router();

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    let {password, name, surname, email, phone, repeatPassword } = req.body;
    console.log(`password: ${password}, name: ${name}, surname: ${surname}, email: ${email}, phone: ${phone}, repeatPassword: ${repeatPassword}`);


    if (password !== repeatPassword) {
        res.render('register', { message: 'Password missmatch' });
        return;
    };

    try {
        userService.create(password, name, surname, email, phone)
            .then(() => res.redirect('/user/login'))
    }
    catch (error) {
        res.render('register', { error });
    }

})

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let token = await userService.login( email, password )
        res.cookie(COOKIE_NAME, token);
        res.redirect('/products');

    } catch (error) {
        res.render('login', { error });
    }
})

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