require('dotenv').config();
const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false },
};

async function createConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to database');
    return connection;
  } catch (error) {
    console.log('Error connecting to database:', error);
    return null;
  }
}

const connection = createConnection();
module.exports = connection;
