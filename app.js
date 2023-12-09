const express = require('express');
const app = express();
const port = process.env.PORT ||3000;

// motor de plantillas
app.set("view engine", "ejs");      
app.set("views", __dirname + "/views");


app.use(express.static(__dirname +"/public"))
app.get('/', (req , res) => {
    // console.log dirname
    res.render("index",{titulo : "titulo dinamico"});
})

app.get('/servicios',(req,res)=>{
    // console.log dirname
    res.render("servicios",{tituloservicios : "titulo dinamico de servicios"});
})

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});

app.use((req ,res ,next)=>{
    res.status(404).render("404",{
        titulo404 : "titulo dinamico de 404",
        descripcion : "Esta pagina no se encuentra"
    });
})