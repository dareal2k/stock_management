var express = require("express");
var bodyParser = require("body-parser");
var app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Routes
app.use("/", require("./routes/home"));


app.listen(3000, function(){
     console.log("start server");
})