const express = require('express');
const app = express();

const port = 3000;

const heroes = require('superheroes');
const supervillains = require ('supervillains');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req , res){
  res.sendFile(__dirname + '/index.html')
});



app.post('/result2', function(req, res){

  var a = req.body.name1;
  var b = req.body.name2;

  res.send("<h1> You should stay away from " + supervillains.random());

});

app.listen(port, function(){
  console.log("app is running on port 3000!");
});
