const express = require('express');
const app = express();

const port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')

});

app.post('/Calculate', function (req, res){
  a = Number(req.body.num1);
  b = Number(req.body.num2);
  a = a/100;
  aSquared = a*a;
  result = b/aSquared;
  result = Math.round(result * 100) / 100 //not sure if correct, trying to round


  res.send("<h1>" + result);
});


app.listen(port, function(){
  console.log("app is running on port 3000!");
});
