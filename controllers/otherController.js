const { Router } = require('express');

const router = Router();

router.get('/', (req, res)=>{
    res.redirect('/home')
    res.render('home', { title: 'Happy Colors' });
})

router.get('/home', (req, res) => {
    res.render('home', { title: 'Happy Colors' });
});

router.get('/about', (req, res) => {
    res.render('about-us', { title: 'About Us' });
});

router.get('/contacts', (req, res) => {
    res.render('contacts', { title: 'Contacts' });
});

router.get('/search', (req, res)=>{
    res.render('search', {title: 'Search'});
});

router.get('/order-success', (req, res) => {
    res.render('mail-success');
});

router.get('/admin', (req, res) => {
    res.render('adminPanel', {title: 'Admin'});
});




module.exports = router;