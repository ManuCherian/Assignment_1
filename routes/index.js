var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Make stepstone to home' });
});

router.get('/about', (req, res, next) => {
    res.render('about', { title: 'real estate enterprise involved in developing rental apartments, condominium homes and seniors communities, acquiring and developing office, industrial and infrastructure properties, and in property management across Canada'});
});
router.get('/services', (req, res, next) => {
    res.render('services', { title: 'Make stepstone to home' });
});
router.get('/contact', (req, res, next) => {
    res.render('contact', { title: 'Details:' });
});

module.exports = router;
