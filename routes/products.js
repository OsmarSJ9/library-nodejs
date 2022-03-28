var express = require('express');
var router = express.Router();
var database = require('../connection/connection');

router.get('/', (request, response, next)=>{

    database.query('SELECT * FROM products', (err, result) => {
        console.log(result);
        response.render("products", {title : "Products", books : result});
    });

    
});

module.exports = router;