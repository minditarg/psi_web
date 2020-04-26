var express = require('express');
var router = express.Router();
const axios = require('axios');



/* GET home page. */


router.get('/prueba', function(req, res, next) {

    
    res.json({variable: 'hola matias'});
    
 

  
});

router.get('/', function(req, res, next) {

  axios.get('http://localhost:3600/list-page-front/6')
  .then(response => {
    
    res.render('index', { title: 'Express' , modules: response.data.modules });
    
  })
  .catch(error => {
    console.log(error);
  });


  
});

module.exports = router;
