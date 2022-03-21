const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/about', (req, res)=>{
    res.render('about-us')
});

router.get('/contacts', (req, res)=>{
    res.render('contacts')
});

router.get('/search', (req, res)=>{
    res.render('search')
})

module.exports = router;