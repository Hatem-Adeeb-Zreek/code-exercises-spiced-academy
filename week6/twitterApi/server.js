const express = require("express");
const app = express();

const { getToken, getTweets, filterTweets } = require("./twitter.js");

app.use(express.static("ticker-ajax"));

app.get("/links.json", (req, res) => {
    console.log("requesting JSON");

    getToken(function (err, bearerToken) {
        if (err) {
            console.log("error in getToken", err);
            return;
        }

        getTweets(bearerToken, function (err, tweets) {
            if (err) {
                console.log("error in getTweets", err);
                return;
            }

            const filteredTweets = filterTweets(tweets);

            res.json(filteredTweets);
        });
    });
});

app.listen(8080, () => console.log("server here at 8080"));
