const dotenv = require("dotenv")
dotenv.config()
const { MongoClient } = require("mongodb");




const client = new MongoClient(process.env.DATABASE_URL);
const db = client.db("CRAPractice")

module.exports = db