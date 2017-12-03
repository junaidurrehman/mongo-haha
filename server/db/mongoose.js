const mongoose = require('mongoose');
var port = process.env.PORT;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://junaid:123456789@ds121336.mlab.com:21336/testing');

module.exports = {mongoose};
