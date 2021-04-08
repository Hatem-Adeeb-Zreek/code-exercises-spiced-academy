// import modules
const http = require("http");
const fs = require("fs");

// date obj to present date and time
const date = new Date();

// create a server
const server = http.createServer((req, res) => {
    // handling errors
    req.on("error", (err) => console.log(err));
    res.on("error", (err) => console.log(err));

    // destructuring
    let { method, headers, url } = req;

    // try to change the method to see the results
    // method = "HEAD";
    // method = "POST";

    // log for each request
    console.log("Method_Name:::", method);
    console.log("Headers:::", headers);
    console.log("URL:::", url);

    // appendFile Method
    fs.appendFile(
        "requests.txt",
        `${date}\t${method}\t${url}\t${headers["user-agent"]}\n`,
        (err) => console.log(err)
    );

    // GET REQUEST
    if (method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.end(`   <!doctype html>
                        <html>
                            <title>Hello World!</title>
                            <p>Hello World!</p>
                        </html>`);
    }

    // HEAD REQUEST
    else if (method === "HEAD") {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.end(`<h1> HEAD Request Done</h1>`);
    }

    // POST REQUEST
    else if (method === "POST") {
        let body = "";
        req.on("data", function (chunk) {
            body += chunk;
        }).on("end", function () {
            console.log(body);
        });
        res.setHeader("Location", "/");
        res.statusCode = 302;
        res.end();
    }

    // user error
    else {
        res.statusCode = 405;
        res.end();
    }
});

// port listening
server.listen(8080, () => console.log("The server is Listening..."));
