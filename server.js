/* Importing Libraries */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { Profile }  = require('./DB/models/profile.model')
const { mongoose } = require('./DB/dbConnect')

const app = express()
app.use(bodyParser.json())

/* ROUTES */

/**
 * POST /register
 * Purpose: post new user data to database
 */
app.post('/register', (req, res) => {
    // We want to push data about new user who just signup
})

/**
 * POST /login
 * Purpose: Authentication of user while signin
 */
app.post('/login', (req, res) => {
    // We want to authenticate user base on login information
})

/**
 * GET /profile/:id/:name
 * Purpose: get profile data
 */
app.get('/profile', (req, res) => {
    // We wants to get an array of the data for a specific profile
    Profile.find().then((profile) => {
        res.send(profile)
    }).catch((e) => {
        res.send(e)
    })
})
app.post('/profile', (req, res) => {
    // We wants to get an array of the data for a specific profile
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email

    let newProfile = new Profile({
        firstName,
        lastName,
        email
    })
    newProfile.save().then((profileDoc) => {
        res.send(profileDoc)
    })
})

/**
 * PATCH /profile/:name
 * Purpose: Update information in database
 */
app.patch('/profile/:name', (req, res) => {
    // Update new information about user if he/she change's it in settings
})

/**
 * DELETE /profile/:id
 * Purpose: Delete Account
 */
app.delete('/profile/:id', (req, res) => {
    // Delete user profile on the base of id
})

/* RUNNING SERVER */

app.listen(3000, () => {
    console.log("Server running on port 3000");
})