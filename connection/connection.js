const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database :  'develotecanodejs'
});

connection.connect(
    (err)=>{
        if(!err){
            console.log("Successful connection!");
        }else{
            console.log("Connection error");
        }
    }
);
/*
connection.query('select * from products', function(err, result){
    console.log(result);
});

connection.end();
*/

module.exports = connection;
