var express = require("express");
var router = express.Router();
var path = require("path");
var dbopr = require("../models/dboperations.js");
//
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
});
router.post('/savetodb', function (req, res) {
    if (req.body.id && req.body.name && req.body.carNo && req.body.mobileNo) {
        var obj = req.body;
        /*{
            id: req.body.id
            , name: req.body.name
            , carNo: req.body.carNo
            , mobileNo: req.body.mobileNo
            , date: req.body.date
        }*/
        dbopr.addNewUser(obj, res);
        console.log("add new user called");
    }
    else {
        res.send(" Enter credentials Properly!! All fields required! ");
    }
});
router.get('/lastid', function (req, res) {
    console.log("entering router last id");
    dbopr.lastId(res);
});
router.get('/search', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/search.html'));
});
router.get('/searchData', function (req, res) {
    var o = req.query;
    dbopr.getUser(o, res);
});
/*router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/login.html'));
});
router.post('/login', function (req, res) {
    var userid = req.body.userid;
    var pass = req.body.pass;
    console.log("req.session : ", req.session);
    if (userid === req.session.userid) {
        res.send("Already logged in as ", userid);
        console.log("already logged in");
    }
    else {
        if (req.body.userid && req.body.pass) {
            var obj = {
                userid: req.body.userid
                , pass: req.body.pass
            }
            dbopr.getUser(obj, res, req.session);
            console.log("login user called");
        }
        else {
            res.send("Enter credentials properly!! Username and Password required!");
        }
    }
});*/
module.exports = router;