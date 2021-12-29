/* Importing Libraries */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

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
app.get('/profile/:id/:name', (req, res) => {
    // We wants to get an array of the data for a specific profile
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