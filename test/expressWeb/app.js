/* global require */

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', function(req, res) {
    res.json([1,2,3]);
});

app.get('/', function(req, res) {
    res.end("Awesome");
});

app.listen(13337);

module.exports = app;
