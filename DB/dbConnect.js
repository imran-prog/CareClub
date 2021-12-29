// This file will handle the MongoDB Connection
const mongoose = require('mongoose')

console.log("Connecting to server");

mongoose.Promise = global.Promise
mongoose.connect('mongodb://admin:imranakbar@sandbox-shard-00-00.6h0sc.mongodb.net:27017,sandbox-shard-00-01.6h0sc.mongodb.net:27017,sandbox-shard-00-02.6h0sc.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-14b0ae-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true}).then(() => {
    console.log("Connnected to MongoDB Successfully!!!");
}).catch((e) => {
    console.log("Error while connecting to database...");
    console.log(e);
})


module.exports = {
    mongoose
}