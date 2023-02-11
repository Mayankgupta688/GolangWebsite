var express = require('express');
const compression = require('compression');
var app = express();

app.set("view engine", "vash");
app.use(express.static(__dirname + '/public'));

app.get('/', function (_, res) {
    res.render('introduction', {
        description: "Getting started with Golang. Learn Golang in Easy Steps. Free Golang Articles and Concepts"
    });
});

app.get('/introduction-to-golang', function (_, res) {
    res.render('introduction', {
        description: "What is Golang, Why do we use Golang. Advantages and Disadvantages of Golang"
    });
});

app.get('/getting-stared-with-golang', function (_, res) {
    res.render('gettingStarted', {
        description: "Software Installation required for Golang. Install software required for Golang"
    });
});

app.get('/hello-world-in-golang', function (_, res) {
    res.render('golangHelloWorld', {
        description: "Hello World Application with Golang. Get started with Golang in Minutes. "
    });
});

app.get('/creating-variables-in-golang', function (_, res) {
    res.render('variablesInGolang', {
        description: "How to create variables in Golang, Creating and using Golang Variables."
    });
});

app.get('/type-conversion-in-golang', function (_, res) {
    res.render('typeConversion', {
        description: "Type Conversion in Golang. Converting Different data types in Golang"
    });
});

app.get('/constant-keyword-in-golang', function (_, res) {
    res.render('constantKeywords', {
        description: "How to create and use Contants in Golang Language."
    });
});

app.get('/iota-keyword-in-golang', function (_, res) {
    res.render('iotaInGolang', {
        description: "IOTA keyword in Golang. Learn how to use IOTA and its Advantages"
    });
});  

app.get('/introduction-to-arrays-in-golang', function (_, res) {
    res.render('workingWithArrays', {
        description: "Working with Arrays in Golang. Different Array Functions in Golang."
    });
});

app.get('/arrays-copied-by-value-in-golang', function (_, res) {
    res.render('copyingArrays', {
        description: "Array comparison in Golang. Steps to equate 2 Arrays in Golang."
    });
});

app.get('/passing-data-to-function', function (_, res) {
    res.render('passingDataToFunctionParameter', {
        description: "Sending data to function parameters in Golang. Data is sent to function parameter by Value"
    });
});


app.use(compression());

app.listen(3000, function () {
    console.log('Server is running..');
});

