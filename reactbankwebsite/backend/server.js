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
//parses incoming requests
//returns middleware that only parses JSON and only looks at requests where content-typer header matches sttype.
app.use(express.json());

//const uri is the variable that allows us to connect to our database, and the process.env.ATLAS_URI; 
//stores our link to the database
const uri = process.env.ATLAS_URI;
//we are then able to connect to the database with mongoose.connect which uses the variable 
//that is stored in dotenv
mongoose.connect(uri, {});

//we get the object instance of the connection b/c we are now connected to the server
const connection = mongoose.connection;
//on the first connection when we 'open' the server we want to console.log it
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


//listens to connections to our server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});