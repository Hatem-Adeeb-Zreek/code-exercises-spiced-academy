const { Key, Secret } = require("./secrets.json");
const https = require("https");

module.exports.getToken = function (callback) {
    let creds = `${Key}:${Secret}`;
    let encodedCreds = Buffer.from(creds).toString("base64");

    const options = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    function cb(response) {
        if (response.statusCode != 200) {
            console.log("something went wrong...", response.statusCode);
            callback(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", function (chunk) {
            body += chunk;
        });
        response.on("end", function () {
            let parsedBody = JSON.parse(body);
            callback(null, parsedBody.access_token);
        });
    }

    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function (bearerToken, callback) {
    const statuses = {
        method: "GET",
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };
    function cb(response) {
        if (response.statusCode != 200) {
            console.log("something went wrong...", response.statusCode);
            callback(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", function (chunk) {
            body += chunk;
        });
        response.on("end", function () {
            let parsedBody = JSON.parse(body);
            callback(null, parsedBody);
        });
    }
    const req = https.request(statuses, cb);
    req.end();
};

module.exports.filterTweets = function (tweets) {
    let tweetsArr = [];
    let filteredArr = tweets.filter(
        (tweet) => tweet.entities.urls.length === 1
    );

    for (let i = 0; i < filteredArr.length; i++) {
        let obj = {};
        obj.href = filteredArr[i].entities.urls[0].url;
        let tweetLong = filteredArr[i].full_text.split(" http")[0];
        obj.heading = tweetLong.substr(0, 45) + "...";

        tweetsArr.push(obj);
    }
    console.log("tweetsArr", tweetsArr);
    return tweetsArr;
};
