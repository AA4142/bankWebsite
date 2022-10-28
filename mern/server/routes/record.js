const express = require("express");

//record routes is an instance of the express router.
//we will use it to define our routes
//the router will act as middleware and take control of the requests
const recordRoutes = express.Router();

//this connects us to the database
const dbo = require("../db/conn");

//this helps convert the id from string to ObjectID for the _id.
const ObjectId = require("mongodb").ObjectId;

//this section will help us get a list of all records
recordRoutes.route("/record").get(function (req, res){
    let db_connect = dbo.getDb("employees");
    db_connect
        .colletion("records")
        .find({})
        .toArray(function (err, result) {
            if(err) throw err;
            res.json(result);
        });
});

//this section will help you get a single record id
recordRoutes.route("/record/:id").get(function (req,res){
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id)};
    db_connect
        .collection("records")
        .findOne(myquery, function(err, result){
            if(err) throw err;
            res.json(result);
        });
});

//this section creates a new record
recordRoutes.route("/record/add").post(function (req,response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    };
    db_connect.collection("records").insertOne(myobj, function(err, res){
        if(err) throw err;
        response.json(res);
    });
});

//create an update record by id
recordRoutes.route("/update/:id").post(function (req, response){
    let db_connect = dbo.getDb();
    let myquery = {_id: ObjectId(req.params.id)};
    let newvalues = {
        $set: {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        },
    };
    db_connect
        .collection("records")
        .updateOne(myquery, newvalues, function(err, res){
            if(err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});

recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("records").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 documenty deleted:");
        response.json(obj);
    });
});

module.exports = recordRoutes;