import * as mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    "name": {type: String},
    "email": {type: String}
})

const Profile = mongoose.model('Profile', ProfileSchema);

export{
    Profile
}