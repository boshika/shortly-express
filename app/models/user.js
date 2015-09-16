var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',

  initialize: function() {
    //implement savig password
  //   this.on('creating',function(model, attrs, options) {
  //     bcrypt.genSalt(10, function(err, salt){
  //     bcrypt.hash(model.password, null, null, function(err, result){
  //       model.set('password', result);
  //     });
  //   });
  // });
 }
}); 

module.exports = User; 


