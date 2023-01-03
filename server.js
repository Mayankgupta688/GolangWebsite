var express = require('express');
const compression = require('compression');
var app = express();

import (
	"encoding/json"
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

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

app.use(compression());

var server = app.listen(5000, function () {
    console.log('Server is running..');
});

import (
	"encoding/json"
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type PostData struct {
	Channel struct {
		Posts []struct {
			Title       string   `xml:"title"`
			Link        string   `xml:"link"`
			Category    []string `xml:"category"`
			Creator     string   `xml:"creator"`
			PubDate     string   `xml:"pubDate"`
			Updated     string   `xml:"updated"`
			License     string   `xml:"license"`
			Encoded     string   `xml:"encoded"`
			Description string   `xml:"description"`
		} `xml:"item"`
	} `xml:"channel"`
}

func getFeeds() {
	resp, err := http.Get("http://fetchrss.com/rss/63b4008f966bbb1b281ef7b263b400f901bafc7721385fc3.xml")

	if err != nil {
		log.Fatal(err)
	}

	defer resp.Body.Close()

	body, _ := ioutil.ReadAll(resp.Body)
	data := &PostData{}
	err = xml.Unmarshal(body, data)
	json, _ := json.Marshal(data.Channel.Posts)
	fmt.Println(string(json))
}
