'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    var i = req.url.indexOf('?');
    var query = req.url.substr(i + 1);
    if (query.substr(0, 7) == "method=") {
        var and = query.indexOf('&');
        var operation = query.substr(7, and-7);
        console.log(operation);
        var x_index = query.indexOf('x=');
        var x_string = query.substr(x_index + 2);
        var and2 = x_string.indexOf('&');
        var x = parseInt(x_string.substr(x_string, and2));
        var y_index = query.indexOf('y=');
        var y = parseInt(query.substr(y_index + 2));

        if (operation == "add") {
            res.send(x + " + " + y + " = " + (x + y));
        } else if (operation == "subtract") {
            res.send(x + " - " + y + " = " + (x - y));
        } else if (operation == "multiply") {
            res.send(x + " * " + y + " = " + (x * y));
        } else if (operation == "divide") {
            res.send(x + " / " + y + " = " + (x / y));
        } else {
            res.send('ERROR: Please use a valid method');
        }
    } else {
        res.send('ERROR: Please use a valid method');
    }
});

module.exports = router;
