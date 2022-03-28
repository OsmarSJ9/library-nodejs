var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', (request, response, next)=>{
  response.render( "about", {title : "about us", numbers : "76438963 - 76464008", phone : "Phone:" });
});




module.exports = router;
