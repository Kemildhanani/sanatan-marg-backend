const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://margofsanatan:margofsanatan@sanatanmarg.c9hpddi.mongodb.net";
const dbName = "Sanatan-Marg";

let cachedClient = null;
let cachedDb = null;

const connectToDB = async () => {
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  cachedDb = client.db(dbName);
  return cachedDb;
};

module.exports = { connectToDB };
