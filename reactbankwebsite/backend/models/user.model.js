
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {type: String, required: true, unique: true, trim: true, minlength: 3 },
    email: { type:String, required: true, lowercase: true, unique: true, },
    password:{ type: String, required: true, }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

userSchema.pre('save', async function (next) {
    try{
        console.log("called before saving a user");

    } catch(error){
        next(error)
    }

} )

userSchema.post('save', async function (next) {
    try{
        console.log("called after saving a user");

    } catch(error){
        next(error)
    }

} )



module.exports = User;