(function () {
    // import modules
    const http = require("http");
    const fs = require("fs");
    const path = require("path");

    // create an obj for types of extensions
    const extensionTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".json": "application/json",
        ".gif": "image/gif",
        ".jpg": "image/jpeg",
        ".png": "image/png",
        ".svg": "image/svg+xml",
    };

    // import custom module to generate HTML
    const { htmlGenerator } = require("./htmlGenerator.js");

    // create a server
    http.createServer((req, res) => {
        //handle potential errors on either req or res
        req.on("error", (err) => console.log("err in req:", err));
        res.on("error", (err) => console.log("err in res:", err));

        // if the request is not GET then render not allowed
        if (req.method !== "GET") {
            console.log("not allowed");
            res.statusCode = 405; //method not allowed
            return res.end();
        }

        // normalizing the targeted path
        const filePath = path.normalize(__dirname + "/projects" + req.url);

        // check for intruders
        if (!filePath.startsWith(`${__dirname}/projects/`)) {
            res.statusCode = 403; //forbidden
            console.log("Forbidden Request");
            return res.end();
        }

        //  handling the error in stat
        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.log("error in stat", err);
                req.statusCode = 404;
                return res.end();
            }

            // if stats is a file then serve the file
            if (stats.isFile()) {
                const extension = path.extname(filePath);
                res.setHeader("Content-Type", extensionTypes[extension]);
                const readStreamHtml = fs.createReadStream(filePath);
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("err in readStreamHtml", err);
                    res.statusCode = 500;
                    res.end();
                });

                // else serve the html file
            } else {
                if (req.url === "/") {
                    res.end(htmlGenerator());
                } else if (req.url.endsWith("/")) {
                    const readStreamHtml = fs.createReadStream(
                        filePath + "index.html"
                    );
                    res.setHeader("Content-Type", "text-html");
                    readStreamHtml.pipe(res);
                    readStreamHtml.on("error", (err) => {
                        console.log("err in readStreamHtml", err);
                        res.statusCode = 500;
                        res.end();
                    });

                    // the final else is redirect
                } else {
                    res.setHeader("Location", req.url + "/");
                    res.statusCode = 302;
                    res.end();
                }
            }
        });
        // listen to port 8080
    }).listen(8080, () => console.log("Listening to port 8080"));
})();
