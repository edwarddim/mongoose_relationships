const mongoose = require('mongoose');

// DEFINE A SCHEMA
const PostSchema = new mongoose.Schema({
    body:{
        type:String,
        required:[true, "Body must be required"],
        minLength:[2, "Body must be longer than 2 characters"]
    },
    creator: {
        type:mongoose.Types.ObjectId, 
        ref:"User"
    }
}, {timestamps:true})

// REGISTER THE SCHEMA
const Superhero = mongoose.model('Superhero', PostSchema);
 
module.exports = Superhero;