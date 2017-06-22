/* global require */

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', function(req, res) {
    res.end('Hello World!');
});

app.listen(13337);
