'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    function Calculate(method, x, y) {
        console.log(req.query);

       //variables
        var numX = parseInt(x);
        var numY = parseInt(y);
      

        //method to calculate based
        if (method == "multiply") {
            console.log(x + " * " + y + " = " + (numX * numY));
        }
        else if (method == "divide") {
            console.log(x + " / " + y + " = " + (numX / numY));
        }
        else if (method == "add") {
            console.log(x + " + " + y + " = " + (numX + numY));
        }
        else if (method == "subtract") {
            console.log(x + " - " + y + " = " + (numX - numY));
        }
            //error message
        else {
            console.log("Error:  You must choose a option either Add - Subtract - multiply or divide");
        }
    }

    //method call
    Calculate(req.query.method, req.query.x, req.query.y);

    res.render('index', { title: 'Lab - 2' });
});

module.exports = router;
