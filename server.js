var express = require('express');
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'keyboard cat', // secret key
    resave: false, // default value
    saveUninitialized: true, // saves empty objects
    cookie: {
    }
}));
var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectId;

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('ServerStarted at http://localhost:3000 ⚡');
});