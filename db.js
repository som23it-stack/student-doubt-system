const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";   // Local MongoDB
const client = new MongoClient(url);

let db;

async function connectDB() {
    if (!db) {
        await client.connect();
        db = client.db("studentDB");   // Database name
        console.log("MongoDB Connected");
    }
    return db;
}

module.exports = connectDB;
