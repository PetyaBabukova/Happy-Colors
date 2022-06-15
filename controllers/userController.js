const { Router } = require('express');
const User = require('../models/User');
const userService = require('../services/userService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SALT_ROUNDS, SECRET } = require('../config/config')

const router = Router();

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    let { username, password, repeatPassword, email, phone } = req.body;

    if (password !== repeatPassword) {
        res.render('register', { message: 'Password missmatch' });
        return;
    }

    try {
        userService.create(username, password, email, phone)
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
    const { username, password } = req.body;

    let user = await User.findOne({ username });
    if (!user) {
        throw { message: 'User not found!' }
    }

    let isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) {
        throw { message: 'Password missmatch!'};
    }

    let token = await jwt.sign({_id: user._id, SECRET: 'polyBelyata'});
    console.log(token);
    res.send(user)



    res.end();

    // try {
    //     let token = await userService.login({ username, password });
    //     console.log(token);
    //     // res.cookie(COOKIE_NAME, token);
    //     // res.redirect('/products');

    // } catch (error) {
    //     console.log(error);
    //     res.render('login', { error });
    // }
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