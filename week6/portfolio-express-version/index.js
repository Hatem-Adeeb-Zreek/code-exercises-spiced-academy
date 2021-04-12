// import modules
const express = require("express");
const cookieParser = require("cookie-parser");
const { htmlGenerator } = require("./htmlGenerator.js");

// init express
const app = express();

// middlewares
app.use(express.static("projects"));

app.use(cookieParser());

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use((req, res, next) => {
    if (req.cookies.checked === undefined && req.path !== "/cookie") {
        res.cookie("req-path", req.path);
        res.redirect("/cookie");
    } else {
        next();
    }
});

// routes
app.get("/", (req, res) => {
    console.log(req.cookies);
    res.send(htmlGenerator());
});

app.get("/cookie", (req, res) => {
    res.send(`
        <h4> 🛑to use this site you must accept cookies🛑</h4>
        <form method="POST">
            <label> accept cookies </label>
            <input type="checkbox" name="checkbox">
            <button>Submit</button>
        </form>
        `);
});

app.post("/cookie", (req, res) => {
    const { checkbox } = req.body;
    if (checkbox === "on") {
        res.cookie("checked", "true");
        res.redirect(req.cookies.path);
    } else {
        res.send(
            "<p> Sorry, You must accept cookies to navigate the website</p>"
        );
    }
});

// port listening
app.listen(8080, () => console.log("Server started on Port 8080"));
