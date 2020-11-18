const { Pool } = require('pg');

const testPool = new Pool({
  connectionString: process.env.TEST_DB_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});

testPool.on('connect', () => console.log('Postgres connected'));

module.exports = testPool;