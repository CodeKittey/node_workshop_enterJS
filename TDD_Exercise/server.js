// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();              // get an instance of the express Router
var employees = [
    { id: 1,  name : "Jens", prename: "Wurst", codingLanguages:["c++", "Java"]},
    { id: 2,  name : "Ankur", prename: "Inda", codingLanguages:["c#", "Objective-C"]},
    { id: 3,  name : "Martina", prename: "Codekittey", codingLanguages:["c#", "Javascript"]},
    { id: 4,  name : "Jan", prename: "Zucker", codingLanguages:["c#", "Javascript"]}
];

//return 'hello world'
router.get('/', function(req, res) {

});

//return the employees JSON-Array
router.get('/dev', function(req, res) {

});

//return the employee for the given id
router.get('/dev/:id', function(req, res) {

});

//add one eployee to the employees-Array and return 201 statuscode
router.post('/dev', function(req, res) {

});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
module.exports = app;
