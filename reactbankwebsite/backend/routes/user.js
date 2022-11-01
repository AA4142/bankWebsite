//this gets us the specific router object in the express library
//this function is used when you want to create a new router object in our program to handle requests
const router = require('express').Router();

//declare user from the schema we made earlier with mongoose.schema for our user.model
let User = require('../models/user.model');