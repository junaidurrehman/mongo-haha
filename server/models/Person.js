var mongoose = require('mongoose');
var Person = mongoose.model('Person',{
  name : {
    type:String
  },
  age:{
    type : Number
  },
  status:{
    type: Boolean
  }
});
module.exports = {Person};
