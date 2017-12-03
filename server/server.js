var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');


var {mongoose} = require('./db/mongoose');
var {Person} = require('./models/Person');

var port = process.env.PORT || 3001;

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
app.get('/persons',(req,res)=>{
  Person.find().then(function(persons){
    res.send({persons});
  },function(e){
    res.status(400).send(e);
  });
});

app.get('/persons/:id',function(req,res){
  var id = req.params.id;
  if(!ObjectId.isValid(id)){
    return res.status(400).send();
  }
  Person.findById(id).then(function(doc){
    res.send({doc});
  },function(e){res.status(400).send(e);});
});

app.listen(port,() => {
  console.log('Server is up and running on port 3001');
});
