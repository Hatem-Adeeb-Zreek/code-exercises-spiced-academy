(function () {
    // import fs module
    const fs = require("fs");

    // the path of the directory to read it
    const path = `${__dirname}/projects`;

    // some poilerplate
    let html = `<!doctype html><html><title>My Portfolio</title><h1>My Portfolio</h1><ul style="list-style-type: none">`;

    // function for generate HTML
    const htmlGenerator = () => {
        const dirs = fs.readdirSync(path, { withFileTypes: true });
        for (let i = 0; i < dirs.length; i++) {
            html += `<li><a href="/${dirs[i].name}" style="text-decoration: none">${dirs[i].name}</a></li>`;
        }
        html += "</ul></html>";
        return html;
    };

    // export custom module
    module.exports.htmlGenerator = htmlGenerator;
})();
