const mongoose = require('mongoose');
mongoose.connect("mongodb://172.18.0.2:27017/lab4");
module.exports = mongoose;