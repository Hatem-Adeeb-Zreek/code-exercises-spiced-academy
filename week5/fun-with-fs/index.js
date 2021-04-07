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

// mapSizes function
const mapSizes = (path) => {
    const dir = fs.readdirSync(path, { withFileTypes: true });
    const obj = {};
    let fileName;
    let dirName;
    for (let i = 0; i < dir.length; i++) {
        if (dir[i].isFile()) {
            fileName = `${dir[i].name}`;
            const stat = fs.statSync(`${path}/${fileName}`);
            obj[fileName] = stat["size"];
        } else {
            dirName = `${dir[i].name}`;
            obj[dirName] = mapSizes(`${path}/${dir[i].name}`);
        }
    }
    return obj;
};

// invoke logSizes function
logSizes(__dirname);

// create json file that has all the dirs and files and the sizes of the files
fs.writeFileSync(
    `${__dirname}/jsonFile.json`,
    JSON.stringify(mapSizes(__dirname), null, 4)
);
