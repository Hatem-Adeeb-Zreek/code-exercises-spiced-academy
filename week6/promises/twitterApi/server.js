const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter.js");

app.use(express.static("ticker-ajax"));

app.get("/links.json", (req, res) => {
    console.log("requesting JSON");

    getToken()
        .then((token) => {
            return getTweets(token);
        })
        .then((results) => {
            const filteredTweets = filterTweets(results);
            res.json(filteredTweets);
        })
        .catch((err) => {
            console.log("err in getToken: ", err);
            res.sendStatus(500);
        });
});

app.listen(8080, () => console.log("server here at 8080"));
