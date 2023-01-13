const mysql = require('mysql2/promise')
require('dotenv').config()

async function query(sql, params) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  })
  const [results, ] = await connection.execute(sql, params)
  connection.end()
  
  return results
}

module.exports = {
  query
};