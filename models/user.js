var mongoose = require('mongoose');


mongoose.connect('mongdb://localhost/nodeauth');

var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    profileimage: {
        type: String
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

/*module.exports.createUser = function(newUser, callback){
    // usage-Async syntex from Bcryptjs on https://www.npmjs.com/package/bcryptjs
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            // Store hash in your password DB.
            newUser.password = hash;
            newUser.save(callback);
        });
    });
    newUser.save(callback);
}*/

// Add Book
module.exports.addUser = (user, callback) => {
	User.create(user, callback);
}