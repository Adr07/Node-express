const express = require('express');
const router = express.Router();

router.get('/', (req , res) => {
    // console.log dirname
    res.render("index",{titulo : "titulo dinamico"});
})

router.get('/servicios',(req,res)=>{
    // console.log dirname
    res.render("servicios",{tituloservicios : "titulo dinamico de servicios"});
})

router.get('/shop-elements',(req,res)=>{
    res.json(res);
});

module.exports = router;