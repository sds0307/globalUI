'use strict';

var app = require('./app');
var http = require('http');
var server = http.createServer(app);

const port = 3001;

server.listen(port, function() {
    console.log(`Express server listening on port ${port}`);
});

