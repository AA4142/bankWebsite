//require is a method(function) from NodeJS
//using the require method  from NodeJS we get access to the 
//ExpressJS is a module of NodeJS and we can load it
//by using require("express"), we then call the variable
//express to know we are working with the framework
const express = require("express");

//create the express application with the pulled module
const app = express();

//we are getting cors from NodeJS and then initializing it as cors
const cors = require("cors");


require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
//get driver connection
const dbo = require("./db/conn");

app.listen(port, () =>{
    //perform a databse connection when server starts
    dbo.connectToServer(function (err) {
        if(err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`)
});