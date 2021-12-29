// Importing Libraries
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.get('', (req, res) => {
    res.send("Connected Succesfully")
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})