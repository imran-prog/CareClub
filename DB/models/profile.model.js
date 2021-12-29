// Creating Schemas for profile
const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    "firstName": {type: String, required: true, minlength: 1, trim: true},
    "lastName": {type: String, required: true, minlength: 1, trim: true},
    "email": {type: String, required: true, minlength: 1, trim: true},
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = {
    Profile
}