// const express = require("express");
// const app = express();
// const { getToken, getTweets, filterTweets } = require("./twitter");
// app.use(express.static("ticker-ajax"));
// app.listen(8080, () => {
//     console.log("listen");
// });

const express = require("express");
const app = express();

const { getToken, getTweets, filterTweets } = require("./twitter.js");

app.use(express.static("ticker-ajax"));

app.get("/links.json", (req, res) => {
    console.log("requesting JSON");

    //1. we ask twitter for tocken
    getToken(function (err, bearerToken) {
        if (err) {
            console.log("error in getToken", err);
            return;
        }
        //2. we use the token for request
        getTweets(bearerToken, function (err, tweets) {
            if (err) {
                console.log("error in getTweets", err);
                return;
            }
            //3. we tidy up the tweets
            const filteredTweets = filterTweets(tweets);

            //4. send back those filtered tweets as a response
            res.json(filteredTweets);
        });
    });
});

app.listen(8080, () => console.log("server here at 8080"));
