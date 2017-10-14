//require schema
//write db operations
//export
var User = require("./schema.js");
/*
var bcrypt = require("bcrypt");


bcrypt.compare(myPlaintextPassword, hash, function(err, res) {});




    bcrypt.hash(user.pass, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.pass = hash;
        next();
    });


*/
var dbOperations = {
    addNewUser: function (userObject, response) {
        var userObject = new User(userObject);
        userObject.save(function (err) {
            if (err) {
                response.send({
                    status: 'error'
                    , obj: err
                });
            }
            else {
                response.send({
                    status: 'success'
                    , obj: {
                        message: 'successful addition to db'
                    }
                });
            }
        });
    }
    , getUser: function (userObject, response, sess) {
        User.find(userObject, function (err, user) {
            if (err) {
                console.log(err);
                response.send({
                    status: 'error'
                    , obj: err
                });
            }
            else {
                if (user[0]) {
                    response.send({
                        status: 'success'
                        , obj: {
                            message: 'search successful'
                            , data: user
                        }
                    });
                }
                else {
                    response.send({
                        status: 'error'
                        , obj: {
                            errmsg: 'user not found'
                        }
                    });
                }
            }
        })
    }
    , lastId: function (res) {
        console.log("entering db last id");
        User.findOne({}, {}, {
            sort: {
                'created_at': -1
            }
        }, function (err, post) {
            console.log(post);
        });
    }
    , deleteUser: function () {}
    , updateUser: function () {}
}
module.exports = dbOperations;