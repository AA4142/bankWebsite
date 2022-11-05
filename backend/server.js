//create the object instance from require and storing it in variables w/ respective names "express" and "cors"
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//this callows us to use Dotenv - the package we installed earlier that automatically loads environment variables
require('dotenv').config();

//creating the app instance from express();, this now allows us to use Express methods b/c
//we can call it like app.use(cors()) or app.use(express.json), our express application use your json method
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {});


const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


const userRouter = require('./routes/user');


app.use('/user', userRouter);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});