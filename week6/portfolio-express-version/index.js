// import modules
const express = require("express");
const cookieParser = require("cookie-parser");

// init express
const app = express();

// middlewares
app.use(cookieParser());

app.use((req, res, next) => {
    if (req.cookies.accepted || req.url == "/cookie") {
        return next();
    }
    if (!req.cookies.url) {
        res.cookie("url", req.url);
    }
    res.redirect("/cookie");
});

app.use(express.static("./projects"));

app.use(
    express.urlencoded({
        extended: false,
    })
);

// routes
app.get("/cookie", (req, res) =>
    res.send(
        `<!doctype html>
        <title>ACCEPT COOKIES PLEASE</title>
        <h1>Will you go along with our cookie policy?</h1>
        <form method="POST">
            <label>
                <input type="checkbox" name="accepts">
                I accept!
            </label>
            <button>submit</button>
        </form>`
    )
);

app.post(`/cookie`, (req, res) => {
    if (req.cookies.accepted) {
        return res.send(
            `<!doctype html>
                <title>THANK YOU FOR ACCEPTING</title>
                <h1>You have already accepted and you can't take it back</h1>
                <p>Enjoy the site`
        );
    }
    if (!req.body.accepts) {
        return res.send(
            `<!doctype html>
                <title>THANKS FOR NOTHING</title>
                <a href="/cookie">Please change your mind</a>`
        );
    }
    res.cookie("accepted", 1);
    const { url = "/spotify" } = req.cookies;
    res.clearCookie("url");
    res.redirect(url);
});

// port listening
app.listen(8080, () => console.log("Server started on Port 8080"));
