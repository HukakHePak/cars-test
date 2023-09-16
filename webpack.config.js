const path = require("path")

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/server.ts",
  resolve: {
    alias: ["schemas", "api", "utils", "public", "models", "pages", "scss", "stores", "utils"].reduce(
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
    filename: "server.js",
    libraryTarget: "this"
  },
  stats: "errors-only"
}
