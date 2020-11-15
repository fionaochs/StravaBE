const express = require('express');
const app = express();
const pool = require('./utils/pool');
// const { Client } = require("pg");
const Rating = require('./models/rating');
const Shoe = require('./models/shoe');
const Athlete = require('./models/athlete');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

app.use(express.json());
app.get('/', (req, res) => {
  pool.connect();

  pool.query(
    "SELECT * FROM information_schema.tables;",
    (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      pool.end();
    }
  );
  res.send("done");
});
app.post('/rateshoe', async(req, res, next) => {
  // let reqBody = req.body;
  // client.connect();
  // client.query(
  //   `INSERT INTO ratings (athletes_id, shoes_id, stars) VALUES (${reqBody.athletes_id},${reqBody.shoes_id},${reqBody.stars})`,
  //   (err, res) => {
  //     if (err) throw err;
  //     for (let row of res.rows) {
  //       console.log(JSON.stringify(row));
  //     }
  //     client.end();
  //   }
  // );
  try {
    const createdRating = await Rating.insert(req.body);
    res.send(createdRating);
  } catch(error) {
    next(error);
  }
});
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
