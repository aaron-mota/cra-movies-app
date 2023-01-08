const dotenv = require("dotenv")
dotenv.config()
const { MongoClient } = require("mongodb");




const client = new MongoClient(process.env.URI);
const db = client.db("CRAPractice")

module.exports = db