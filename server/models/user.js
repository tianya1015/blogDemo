const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//用户
const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  avatar:String,
  createTime: String
});

module.exports = mongoose.model('user',userSchema);
