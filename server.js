var express = require('express');
var app = express();

app.set("view engine", "vash");
app.use(express.static(__dirname + '/public'));

app.get('/', function (_, res) {
    res.render('introduction');
});

app.get('/introduction-to-golang', function (_, res) {
    res.render('introduction');
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});