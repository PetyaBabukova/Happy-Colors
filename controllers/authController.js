const { Router } = require('express');
const authService = require('../services/authService');
const { COOKIE_NAME } = require('../config/config');
const isGuest = require('../middlewares/isGuest');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = Router();

router.get('/register', isGuest, (req, res) => {
    res.render('register');
});

router.post('/register', isGuest, async (req, res) => {
    let { password, name, surname, email, phone, repeatPassword } = req.body;
    console.log(`password: ${password}, name: ${name}, surname: ${surname}, email: ${email}, phone: ${phone}, repeatPassword: ${repeatPassword}`);


    if (password !== repeatPassword) {
        res.render('register', { message: 'Password missmatch' });
        return;
    };

    try {
        authService.create(password, name, surname, email, phone)
            .then(() => res.redirect('/user/login'))
    }
    catch (error) {
        res.render('register', { error });
    }

})

router.get('/login', isGuest, (req, res) => {
    res.render('login');
})

router.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;
    try {
        let token = await authService.login(email, password)
        res.cookie(COOKIE_NAME, token);
        res.redirect('/products');

    } catch (error) {
        res.render('login', { error });
    }
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/products');
})

module.exports = router;