// require connection.js
// connection.Schema
// new Schema({});
// connection.model("users",userSchema)
// export it
var connection = require("./connection.js");
var Schema = connection.Schema;
var userSchema = new Schema({
    id: {
        type: Number
        , required: true
        , unique: true
    }
    , name: {
        type: String
        , required: true
    }
    , carNo: {
        type: String
        , required: true
    }
    , mobileNo: {
        type: String
        , required: true
    }
    , date: {
        type: Object
        , required: true
    }
});
var User = connection.model("users", userSchema);
module.exports = User;