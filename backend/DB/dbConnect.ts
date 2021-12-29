import * as mongoose from 'mongoose';

console.log("Connecting Database");


(<any>mongoose).Promise = global.Promise

export default {
connect() {
mongoose.connect('mongodb+srv://admin:imranakbar@sandbox.6h0sc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    console.log("Database connected successfully")
}).catch((e) => {
    console.log("Error while connecting to database");
    console.log(e);
})
}
}
