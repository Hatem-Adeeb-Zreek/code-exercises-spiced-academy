// import fs module
const fs = require("fs");

// logSizes function
function logSizes(path) {
    return fs.promises.readdir(path, { withFileTypes: true }).then((files) => {
        const promises = [];
        for (let i = 0; i < files.length; i++) {
            const nextPath = `${path}/${files[i].name}`;
            if (files[i].isDirectory()) {
                promises.push(logSizes(nextPath));
            }
            if (files[i].isFile()) {
                promises.push(
                    fs.promises.stat(nextPath).then((stats) => {
                        console.log(`${nextPath}: ${stats.size}`);
                    })
                );
            }
        }
        return Promise.all(promises);
    });
}

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

logSizes(`${__dirname}/files`).then(() => console.log("done!"));

// create json file that has all the dirs and files and the sizes of the files
fs.writeFileSync(
    `${__dirname}/jsonFile.json`,
    JSON.stringify(mapSizes(__dirname), null, 4)
);
