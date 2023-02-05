var express = require('express');
const compression = require('compression');
var app = express();

app.set("view engine", "vash");
app.use(express.static(__dirname + '/public'));

app.get('/', function (_, res) {
    res.render('introduction', {
        description: "Introduction to Golang, Getting started with Go/Golang"
    });
});

app.get('/introduction-to-golang', function (_, res) {
    res.render('introduction', {
        description: "Introduction to Golang, Getting started with Go/Golang"
    });
});

app.get('/getting-stared-with-golang', function (_, res) {
    res.render('gettingStarted', {
        description: "Simple Steps to get started with Golang"
    });
});

app.get('/hello-world-in-golang', function (_, res) {
    res.render('golangHelloWorld', {
        description: "Introduction to Golang, Getting started with Go/Golang"
    });
});

app.get('/creating-variables-in-golang', function (_, res) {
    res.render('variablesInGolang', {
        description: "Introduction to Golang, Getting started with Go/Golang"
    });
});

app.get('/type-conversion-in-golang', function (_, res) {
    res.render('typeConversion', {
        description: "Introduction to Golang, Getting started with Go/Golang"
    });
});

app.get('/constant-keyword-in-golang', function (_, res) {
    res.render('constantKeywords', {
        description: "Introduction to Golang, Getting started with Go/Golang"
    });
});

app.get('/iota-keyword-in-golang', function (_, res) {
    res.render('iotaInGolang', {
        description: "Introduction to Golang, Getting started with Go/Golang"
    });
});  

app.get('/introduction-to-pointers-in-golang', function (_, res) {
    res.render('workingWithPointers', {
        description: "Introduction to Golang, Getting started with Go/Golang"
    });
});


app.use(compression());

app.listen(3000, function () {
    console.log('Server is running..');
});

