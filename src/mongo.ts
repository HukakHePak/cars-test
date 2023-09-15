const { MongoClient } = require("mongodb")

const client = new MongoClient(process.env.MONGO || "mongodb://127.0.0.1:27017")

export default client
