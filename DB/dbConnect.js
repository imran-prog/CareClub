// This file will handle the MongoDB Connection
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/27017/', {useNewUrlParser: true}).then(() => {
    console.log("Connnected to MongoDB Successfully!!!");
}).catch((e) => {
    console.log("Error while connecting to database...");
    console.log(e);
})

// To prevent deprectetion warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndSet', true)

module.exports = {
    mongoose
}