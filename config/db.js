const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);
let db;

const connectDB = async () => {
  await client.connect();

  db = client.db(process.env.DB_NAME);
  console.log('MongoDB connected');
};

const getDB = () => db;

module.exports = { connectDB, getDB };
