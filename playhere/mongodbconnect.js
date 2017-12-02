var Mongoclient = require('mongodb').MongoClient;
console.log('starting');
Mongoclient.connect('mongodb://localhost:27017/first',function(err,db){
  if(err){
    return console.log('unable to connect to database');
  }
  console.log('successfully connected to mongodb server');

  // db.collection('persons').insertOne({
  //   name:'junaid'
  // },(err,result) => {
  //   if(err){
  //     return console.log('error');
  //   }
  //   console.log(JSON.stringify(result,undefined,2));
  // });
  db.collection('persons').find().toArray().then(function(results){
    console.log(JSON.stringify(results,undefined,2));
  },  function(erro){
    console.log('error');
  });
  //db.close();
});
