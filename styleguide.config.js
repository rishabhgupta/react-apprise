const path = require('path');

module.exports = {
    require: [
        path.join(__dirname, "src/index.css"),
    ],
    pagePerSection: true,
    styleguideDir: "build",
}