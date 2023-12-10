const express = require('express');
const app = express();
const port = 3000;

const {getdata} = require("./router/shop-elements");

//conexion a base de datos mysql
const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'shop',
    user: 'root',
    password: '1234'
});

app.get('/elem',(req,res)=>{
    getdata(conexion,resul =>{
        res.send(resul)
    });
})

conexion.connect(function(error){
    if(error){throw error;}
    else{console.log("Conxion exitosa")}
});



// motor de plantillas
app.set("view engine", "ejs");      
app.set("views", __dirname + "/views");

//establece el uso de la ruta public para css y js
app.use(express.static(__dirname +"/public"))

//rutas web
app.use('/',require('./router/rutasweb'))

app.get('/elem/:id',(req,res)=>{
    const {id} = req.params;

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
