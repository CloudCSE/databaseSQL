// db.js
const mysql = require("mysql2");

// Database connection details
const db = mysql.createConnection({
  host: "database-1.cnw4auiwe8bt.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "subho123",
  port: "3306",
  database: "users",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = db;
