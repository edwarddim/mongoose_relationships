const mongoose = require('mongoose');

// DEFINE A SCHEMA
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[2, "User name  must be longer than 2 chars"]
    }
}, {timestamps:true})

// REGISTER THE SCHEMA
const User = mongoose.model('User', UserSchema);
 
module.exports = User;