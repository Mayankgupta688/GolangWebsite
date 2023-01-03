package main

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

// Return the Data from the Function as a API data returned from Golang Server

func main() {
	resp, err := http.Get("http://fetchrss.com/rss/63b4008f966bbb1b281ef7b263b400f901bafc7721385fc3.xml")

	if err != nil {
		log.Fatal(err)
	}

	defer resp.Body.Close()

	body, _ := ioutil.ReadAll(resp.Body)
	data := &PostData{}
	xml.Unmarshal(body, data)
	json, _ := json.Marshal(data.Channel.Posts)
	fmt.Println(string(json))
}
