// import modules
const http = require("http");
const querystring = require("querystring");
const chalk = require("chalk");

// create a server
const server = http.createServer((req, res) => {
    // TODO: Handle error events
    req.on("error", (err) => console.log(err));
    res.on("error", (err) => console.log(err));

    // GET Request
    if (req.method === "GET") {
        res.write(`<!doctype html>
                   <html>
                      <title>Colors</title>
                      <form method="POST">
                         <input type="text" name="text">
                         <select name="color">
                            <option value="red">red</option>
                            <option value="blue">blue</option>
                            <option value="green">green</option>
                            <option value="yellow">yellow</option>
                            <option value="gray">gray</option>
                            <option value="magenta">magenta</option>
                            <option value="cyan">cyan</option>
                         </select>
                         <button type="submit">Go</button>
                      </form>
                   </html>`);
        res.end();
    } else if (req.method === "POST") {
        let body = "";
        req.on("data", function (chunk) {
            body += chunk;
        }).on("end", function () {
            const parsedBody = querystring.parse(body);
            console.log(chalk[parsedBody.color](parsedBody.text));
        });
        res.end(`<!doctype html>
                 <html>
                    <title>it is better to have loved and lost than never to have loved at all</title>
                    <a href="/" style="color:magenta">it is better to have loved and lost than never to have loved at all</a>
                 </html>`);
    } else {
        res.statusCode = 405; // Method Not Allowed
        res.end();
    }
});

server.listen(8080, () => console.log("🟢 Listening on 8080..."));
