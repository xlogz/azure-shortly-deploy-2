var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

//Create Schema named users which hold the fields for a User Model
var users = mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    timestamps: Date,
});

//Set User variable to become the constructor of a User using users Schema
var User = mongoose.model('User', users);

User.prototype.comparePassword = function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
      if(err){
        callback(err);
      }else{
      callback(null, isMatch);
      }
    });
  },

users.pre('save', function(next){
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash){
      this.password = hash;
      next();
    });
});


module.exports = User;
