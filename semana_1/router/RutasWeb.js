const express = require('express');
const router = express.Router();


// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
    res.render('cv',{titulo:"Github"})
})

router.get('/estudios', (req, res) => {
    res.render('estudios',{titulo:"Bachillerato",descripcion:"producto1 "})
})

router.get('/habilidades', (req, res) => {
    res.render('habilidades',{titulo:"Pagina Home con render",descripcion:"producto1 "})
})

module.exports = router;