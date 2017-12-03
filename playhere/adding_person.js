var junaid = new Person({
  name:'junaid',
  age:30,
  status:true
});
junaid.save().then((doc)=>{
  console.log(doc);
}, (err)=> {
  console.log('error');
});
