var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Person} = require('./models/Person');

var app = express();

app.use(bodyParser.json());
app.get('/',(req,res) => {
  res.send('Hello');
});
app.post('/persons',(req,res) => {
  var person = new Person({
    name:req.body.name,
    age:req.body.age,
    status:req.body.status
  });
  person.save().then((doc)=>{
    res.send('Saved successfully');
  }, (err)=> {
    console.log('error');
  });

});

app.listen(3001,() => {
  console.log('Server is up and running on port 3001');
});