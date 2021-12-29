"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
console.log("Connecting Database");
mongoose.Promise = global.Promise;
exports["default"] = {
    connect: function () {
        mongoose.connect('mongodb+srv://admin:imranakbar@sandbox.6h0sc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(function () {
            console.log("Database connected successfully");
        })["catch"](function (e) {
            console.log("Error while connecting to database");
            console.log(e);
        });
    }
};
