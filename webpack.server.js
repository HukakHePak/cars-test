const path = require("path")
const FileManagerPlugin = require("filemanager-webpack-plugin")

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/server.ts",
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
  plugins: [
    new FileManagerPlugin({
      events: {
        onStart: {
          copy:  [
            { source: 'public', destination: 'build/public' }
          ],
        }
      }
    }),
  ],
  output: {
    path: path.join(__dirname, "/build"),
    filename: "server.js",
    libraryTarget: "this"
  },
  stats: "errors-only"
}
