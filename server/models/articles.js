const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//文章
const articleSchema = new Schema({
  title: String,
  content: String,
  tags:[{
      type: Schema.Types.ObjectId,
      ref: 'tag'
  }],
  createTime: Date
});

articleSchema.path('createTime').get(function (v) {
  return new Date(v).format('yyyy-MM-dd hh:mm:ss');
});

module.exports = mongoose.model('article',articleSchema);
