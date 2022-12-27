var express = require('express');
var app = express();

app.set("view engine", "vash");
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index');
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});