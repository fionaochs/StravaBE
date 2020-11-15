const express = require('express');
const app = express();
const pool = require('./utils/pool');

app.use(express.json());
app.get('/', (req, res) => {
  res.send('hello world');
});
app.post('/', (req, res, next) => {
  let reqBody = req.body;
  pool.query(INSERT INTO ratings (athletes_id, ))
})
// INSERT INTO ratings
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
