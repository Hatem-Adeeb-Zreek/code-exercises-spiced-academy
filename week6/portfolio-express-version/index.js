// import modules
const express = require("express");
const { htmlGenerator } = require("./htmlGenerator.js");

// init express
const app = express();

// middleware
app.use(express.static("projects"));

// routes
app.get("/", (req, res) => {
    res.send(htmlGenerator());
});

// port listening
app.listen(8080, () => console.log("Server started on Port 8080"));
