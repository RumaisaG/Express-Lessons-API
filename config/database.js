const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require('dotenv').config();

const uri = process.env.MONGO_URI;

let client; 
let db;

async function connectToDatabase() {
  if (db) {
    return db; 
  }

  try {
   
    client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
    await client.connect();

    db = client.db(process.env.DB_NAME); 
    console.log('Connected to MongoDB');
    return db;

  } catch (error) {
    console.error(' MongoDB connection error:', error);
    throw error;
  }
}

function getDb() {
  if (!db) {
    throw new Error('Database not connected.');
  }
  return db;
}

async function closeDatabaseConnection() {
  if (client) {
    await client.close();
    db = null;
    client = null;
    console.log('Database connection closed');
  }
}

module.exports = { connectToDatabase, getDb, closeDatabaseConnection, ObjectId };
