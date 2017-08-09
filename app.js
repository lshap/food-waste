'use strict';

var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('./public'));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(process.env.PORT || 7000, function() {
    console.log('Listening on port ' + (process.env.PORT || 7000));
});
