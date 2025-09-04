
const { Pool } = require('pg');
require('dotenv').config();

const db = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.connect(err => {
  if (err) {
    console.error('Error al conectar a PostgreSQL:', err);
    throw err;
  }
  console.log('Conexión exitosa a PostgreSQL');
});

module.exports = db;