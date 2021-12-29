"use strict";
exports.__esModule = true;
exports.Profile = void 0;
var mongoose = require("mongoose");
var ProfileSchema = new mongoose.Schema({
    "name": { type: String },
    "email": { type: String }
});
var Profile = mongoose.model('Profile', ProfileSchema);
exports.Profile = Profile;
