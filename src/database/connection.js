const { Pool } = require("pg");

const pool = new Pool({
  user: "vinicius",
  host: "localhost",
  database: "db_bills",
  password: "12345678",
  max: 20,
  port: 5432
});

pool.connect();

module.exports = pool;
