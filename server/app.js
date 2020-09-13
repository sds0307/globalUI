'use strict';

var express = require('express');
var app = express();
var index = require('./routes/index');
const path = require('path');

// Set up view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Serve contents of client directory as static files.
app.use(express.static(
  path.resolve(__dirname, 'dist', 'client')
)
);

app.get('*', index());

module.exports = app;
