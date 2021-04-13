// import modules
const express = require("express");
const cp = require("cookie-parser");
const basicAuth = require("basic-auth");
const { htmlGenerator } = require("./htmlGenerator.js");

// init express
const app = express();

// middlewares
const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "syria" || creds.pass != "syria") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="please enter your username and password to continue"'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use("/carousel", auth);

app.use(cp());

app.use(function (req, res, next) {
    if (req.cookies.accepted === undefined && req.path !== "/cookie") {
        res.cookie("myPath", req.path);
        res.redirect("/cookie");
    } else {
        next();
    }
});

app.use(express.static("projects"));

app.use(
    express.urlencoded({
        extended: false,
    })
);

// routes
app.get("/", (req, res) => {
    res.send(htmlGenerator());
});

app.get("/cookie", (req, res) => {
    res.send(
        `   <h4> this website use cookies. you should accept cookies to continue</h4>
            <form method="POST">
                <input type="checkbox"  name="checkbox">
                <label>accepted</label>
                <button>Submit</button>
            </form>
        `
    );
});

app.post("/cookie", (req, res) => {
    if (req.body.checkbox === "on") {
        res.cookie("accepted", "true");
        if (req.cookies.myPath) {
            res.redirect(req.cookies.myPath);
        } else {
            res.redirect("/");
        }
    } else {
        res.send(
            `
                <p>You should accept cookies to continue</p>
            `
        );
    }
});

// server listening
app.listen(8080, () => console.log("Server listening"));
