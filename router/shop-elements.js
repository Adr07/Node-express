const mysql = require('mysql');


function getdata(conexion,calback){
    queryselect ="select * from shop.users";
    conexion.query(queryselect,function(err,res){
        if(err) throw err;
        calback(res);
    })
}

// function getdata(conexion,calback){
//     conexion.query('select * from shop.users', function(err,res){
//         if(err){
//             throw err;
//         }
//         else{
//             res.forEach(element => {
//                 var shop = {
//                     id: element.id,
//                     name: element.name,
//                     lastname: element.lastname,
//                     email: element.email,
//                     password: element.password,
//                     rol: element.rol
//                 }
//                 calback(shop);
//             });
//         }
        
//     });
// }

module.exports = {getdata}