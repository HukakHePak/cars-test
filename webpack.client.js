const path = require("path")

module.exports = {
  mode: "development",
  target: "node",
  entry: "./client/app.ts",
  resolve: {
    alias: ["models", "api", "utils", "public", "models", "client", "constatns", "core", "interfaces", "helpers"].reduce(
      (alias, item) => {
        alias[item] = path.resolve(__dirname, `src/${item}/`);
        return alias;
      }, {})
    ,
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: [/\.ts$/],
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
    ]
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "app.js",
    libraryTarget: "this"
  },
  stats: "errors-only"
}
