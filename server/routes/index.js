const express = require('express');
const path = require('path');

function index(req, res) {
    res.render(
        path.join(__dirname, '..', 'dist', 'client', 'index'));
}

module.exports = function() {
    var router = express.Router();
    router.get('*', index);
    return router;
};