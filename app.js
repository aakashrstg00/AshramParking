const express = require("express");
const bodyParser = require("body-parser");
//const connection = require("./connection.js");
//var db = connection.connection;
var ejs = require("ejs");
let session = require("express-session");
var router = require("./routes/router.js");
//let MongoStore = require("connect-mongo")(session);
const app = express();
app.use(express.static('public'));
app.use(session({
    secret: "theflashjgbawwba"
    , resave: true
    , saveUninitialized: false
        /*, store: new MongoStore({
    mongooseConnection: db
})*/
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/', router);
app.set("view engine", "ejs");
app.listen("3000", function () {
    console.log("server up and running at 3000 port!");
});