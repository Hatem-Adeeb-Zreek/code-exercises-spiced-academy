// import fs module
const fs = require("fs");

// logSizes function
const logSizes = (path) => {
    fs.readdir(path, { withFileTypes: true }, (err, content) => {
        if (err) {
            return console.log(err);
        }
        for (let i = 0; i < content.length; i++) {
            if (content[i].isFile()) {
                fs.stat(`${path}/${content[i].name}`, (err, stat) => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(`${path}/${content[i].name}: ${stat.size}`);
                });
            } else {
                logSizes(`${path}/${content[i].name}`);
            }
        }
    });
};

// invoke logSizes function
logSizes(__dirname);
