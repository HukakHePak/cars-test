const path = require("path")

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/server.ts",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "server.js"
  },
  stats: "errors-only"
}
