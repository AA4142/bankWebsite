//we get the mongoose framework so we can create the schema to talk to database
const mongoose = require('mongoose');

//technically we don't have to do this, but it allows us to not have to declare 
//a new Schema everytime we create a new Schema
const Schema = mongoose.Schema;

//this is our user Model it is a Schema with validations
// we know it's a string thats required and unique , remove white space and a minimum length of 3
//timestamps gives us when created and when modified
const userSchema = new Schema({
    username: {type: String, required: true, unique: true, trim: true, minlength: 3 },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User;