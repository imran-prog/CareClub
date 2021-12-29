"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var dbConnect_1 = require("./DB/dbConnect");
var profile_model_1 = require("./DB/models/profile.model");
var app = express();
app.use(bodyParser.json());
var PORT = 3000;
dbConnect_1["default"].connect();
app.get('/profile', function (req, res) {
    profile_model_1.Profile.find().then(function (profile) {
        res.send(profile);
    });
});
app.post('/profile', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var newProfile = new profile_model_1.Profile({
        name: name,
        email: email
    });
    newProfile.save().then(function (profileDoc) {
        res.send(profileDoc);
    });
});
app.listen(PORT, function () {
    console.log("Server running in 3000");
});
