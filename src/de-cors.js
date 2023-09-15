const cors = require("cors")

const corsConfig = {
  development: { origin: [/\.github\.io$/, /:8000/, /note-lawn\.ru/], credentials: true },
  production: {
    origin: [/note-lawn\.ru/],
    credentials: true
  }
}[process.env.MODE]

const decors = cors(corsConfig)

module.exports = decors
