import * as express from 'express';
import * as bodyParser from 'body-parser';
import DB from './DB/dbConnect';
import { Profile } from './DB/models/profile.model';

const app = express();
app.use(bodyParser.json())
const PORT = 3000;

DB.connect()

app.get('/profile', (req:any, res:any):void => {
    Profile.find().then((profile:any) => {
        res.send(profile)
    })
})

app.post('/profile', (req:any, res:any):void => {
    let name = req.body.name;
    let email = req.body.email;

    let newProfile = new Profile({
        name,
        email
    })

    newProfile.save().then((profileDoc: any) => {
        res.send(profileDoc)
    })
})

app.listen(PORT, ():void => {
    console.log("Server running in 3000");
})