var express = require('express');
const compression = require('compression');
var app = express();

app.set("view engine", "vash");
app.use(express.static(__dirname + '/public'));

app.get('/', function (_, res) {
    res.render('introduction');
});

app.get('/introduction-to-golang', function (_, res) {
    res.render('introduction');
});

app.get('/getting-stared-with-golang', function (_, res) {
    res.render('gettingStarted');
});

app.get('/hello-world-in-golang', function (_, res) {
    res.render('golangHelloWorld');
});

app.get('/creating-variables-in-golang', function (_, res) {
    res.render('variablesInGolang');
});

app.get('/type-conversion-in-golang', function (_, res) {
    res.render('typeConversion');
});

app.get('/constant-keyword-in-golang', function (_, res) {
    res.render('constantKeywords');
});

app.get('/iota-keyword-in-golang', function (_, res) {
    res.render('iotaInGolang');
});  

app.get('/introduction-to-pointers-in-golang', function (_, res) {
    res.render('workingWithPointers');
});


app.use(compression());

app.listen(80, function () {
    console.log('Server is running..');
});

