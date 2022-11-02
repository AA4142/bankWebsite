
const router = require('express').Router();
const bcrypt = require('bcrypt');




let User = require('../models/user.model');

router.route('/').get((req, res) => {

    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({username, email, password});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch((err) => res.status(400).json('Error ' + err));
})

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user.username))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json("user deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
})


//real production probably includes update and delete


module.exports = router;