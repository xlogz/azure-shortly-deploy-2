var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');

var urls = mongoose.Schema({
    id: Number,
    url: String,
    base_url: String,
    code: String,
    title: String,
    visits: Number,
    timestamps: Date,
});

var Link = mongoose.model('Url', urls);

urls.pre('save', function(next){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

module.exports = Link;
