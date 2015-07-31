// var Bookshelf = require('bookshelf');
// var path = require('path');
var mongoose = require('mongoose');
// var crypto = require('crypto');

// var bcrypt = require('bcrypt-nodejs');
// var Promise = require('bluebird');

//var host = process.env.IP || 'localhost';
var db = mongoose.connect('mongodb://localhost/shortlydb');

// var urls = mongoose.Schema({
//     id: Number,
//     url: String,
//     base_url: String,
//     code: String,
//     title: String,
//     visits: Number,
//     timestamps: Date,
// });



// db.Url.remove({ id: this.id }, function (err) {
//   if (err) return handleError(err);
//   // removed!
// });

// Links.pre('save', function (next) {
//   var shasum = crypto.createHash('sha1');
//   shasum.update(this.url);
//   this.code = shasum.digest('hex').slice(0, 5);
//   console.log('Shortened URL suffix: ' + this.code);
// };

// db.Link = mongoose.model('Url', urls);



// users.methods.hashPassword = function(){
//   var cipher = Promise.promisify(bcrypt.hash);
//   return cipher(this.password, null, null).bind(this)
//     .then(function(hash) {
//       this.password = hash;
//     });
// };

// users.methods.comparePassword = function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
//       callback(isMatch);
//     });
  // },

  // initialize: function(){
  //   this.on('creating', this.hashPassword);
  // },
  // comparePassword: function(attemptedPassword, callback) {
  //   bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
  //     callback(isMatch);
  //   });
  // },
  // hashPassword: function(){
  //   var cipher = Promise.promisify(bcrypt.hash);
  //   return cipher(this.get('password'), null, null).bind(this)
  //     .then(function(hash) {
  //       this.set('password', hash);
  //     });
  // }


module.exports = db;
