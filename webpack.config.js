const path = require("path");

module.exports = {
  entry: "./src/uuid.js",
  output: {
    filename: "uuid.js",
    path: path.resolve(__dirname, "dist")
  }
};
