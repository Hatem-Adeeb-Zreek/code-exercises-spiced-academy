const express = require("express");
const app = express();

const { getToken, getTweets, filterTweets } = require("./twitter.js");

app.use(express.static("ticker-ajax"));

app.get("/links.json", (req, res) => {
    getToken()
        .then((token) => {
            Promise.all([
                getTweets(token, "bbcworld"),
                getTweets(token, "TheOnion"),
                getTweets(token, "nytimes"),
            ])
                .then((results) => {
                    const mergedResults = [
                        ...results[0],
                        ...results[1],
                        ...results[2],
                    ];
                    const sortedTweets = mergedResults.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    });
                    const filteredTweets = filterTweets(sortedTweets);
                    res.json(filteredTweets);
                })
                .catch((err) => {
                    console.log("err in promise all: ", err);
                });
        })
        .catch((err) => {
            console.log("err in catch: ", err);
        });
});

app.listen(8080, () => console.log("server here at 8080"));
