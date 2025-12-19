const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "kishorkumargs@2007",
  database: "fleet_management",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

if(pool) console.log("Database connected");

module.exports = pool;