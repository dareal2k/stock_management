var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
     res.render("user/stock_grid");
});

router.get("/stock/:name", function(req, res){
     var serverKey = 'UNQFVGrafzYfXwJoPF1%2FDD9BmBsRouaV9e9AT0Nw9QFk8w2eHmVt3W9hYib54IAv4ONXRGRs%2FQxPz2hflpCjNA%3D%3D';

     var sName = req.params.name;
     console.log(req.params)
     return res.json({name:sName});
});
module.exports = router;
