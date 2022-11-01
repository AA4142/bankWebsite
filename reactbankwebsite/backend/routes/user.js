//this gets us the specific router object in the express library
//this function is used when you want to create a new router object in our program to handle requests
const router = require('express').Router();

//declare user from the schema we made earlier with mongoose.schema for our user.model
let User = require('../models/user.model');

//this is the first endpoint that we are creating with router, for the end point route('/')
//this specific router handles GET requests 
// the steps are from server we know it's port 5000 -> /user if theres only a / we use the GET route
router.route('/').get((req, res) => {
    //mongoose method that gets all the users from the mongoDB database
    //we created the User model earlier
    //the find method returns a promise
    User.find()
        //After we get the users we then return the user information in json format
        //Get all the USER info from MONGODB - use mongoose to return the promise (object with all the user info)
        //THEN return the user infro from the server in json fromat
        .then(user => res.json(user))
        //if there is an error return message based off the promise
        //if we are unable to complete or get info off promise returns error - mongoose
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    //req.body allows us to get information from object in POST and PUT requests in Express server
    //we get ther username information from the POST object and store it into variable username
    const username = req.body.username;

    //we then create a new username and give it the value of newUser
    const newUser = new User({username});

    //use the mongoose.db function save b/c its asynchronous we can then have a .then and .catch after it
    newUser.save()
        //after the newUser object is saved we then get a response from the HTTPS saying user is added
        .then(() => res.json('User added!'))
        //if the then promise doesn't work catch the error in the response
        .catch((err) => res.status(400).json('Error ' + err));
})

//finally we export the router we made back to express
module.exports = router;