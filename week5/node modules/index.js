// import modules
const url = require("url");
const querystring = require("querystring");
const process = require("process");
const chalk = require("chalk");

// Parsing
const userUrl = url.parse(process.argv[2]);
const userQueryString = querystring.parse(userUrl.query);

// variables
const protocol = userUrl.protocol;
const host = userUrl.host;
const hostName = userUrl.hostname;
const port = userUrl.port;
const pathName = userUrl.pathname;
const query = userUrl.query;

// log the results with chalk
console.log(
    `\nThe protocol is ${chalk.blue(protocol)}\n
    The host is ${chalk.blue(host)}\n
    The hostname is ${chalk.blue(hostName)}\n
    The port is ${chalk.blue(port)}\n
    The pathname is ${chalk.blue(pathName)}\n
    The query is ${chalk.blue(query)}`
);

// check the query inside the url object
if (url.query !== null) {
    for (let key in userQueryString) {
        console.log(
            `\nThe value of the ${chalk.yellow(
                key
            )} parameter is ${chalk.yellow(userQueryString[key])}`
        );
    }
}
