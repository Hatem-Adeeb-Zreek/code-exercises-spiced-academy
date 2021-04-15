// import modules
const express = require("express");
const hb = require("express-handlebars");
const projects = require("./projects.json");

// init express
const app = express();

// config handlebars
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

// middlewares
app.use(express.static("./projects"));
app.use(express.static("./public"));

//routes
app.get("/", (req, res) => {
    res.render("welcome", {
        layout: "main",
        projects,
    });
});
app.get("/description/:project", (req, res) => {
    const { project } = req.params;
    const selectedProject = projects.find((item) => item.directory === project);
    if (!selectedProject) {
        return res.sendStatus(404);
    } else {
        res.render("description", {
            selectedProject,
            projects,
        });
    }
});
// Listen to port 8080
app.listen(8080, () => {
    console.log(" server listening to port 8080");
});
