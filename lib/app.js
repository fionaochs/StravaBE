const express = require('express');
const app = express();
const pool = require('./utils/pool');
// const { Client } = require("pg");
const Rating = require('./models/rating');
const Shoe = require('./models/shoe');
const Athlete = require('./models/athlete');
const ShoeRec = require('./models/shoeRec');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

app.use(express.json());
app.get('/', async(req, res, next) => {
  try {
    const foundRating = await Rating.find();
    res.send(foundRating);
  } catch(error) {
    next(error);
  }
});
app.get('/avgrating/:id', async(req, res, next) => {
  try {
    const foundRating = await Rating.findAvg(req.params.id);
    res.send(foundRating);
  } catch(error) {
    next(error);
  }
});
app.get('/recshoes/:id', async(req, res, next) => {
  try {
    const foundRecs = await ShoeRec.findRec(req.params.id);
    res.send(foundRecs);
  } catch(error) {
    next(error);
  }
});
app.post('/rateshoe', async(req, res, next) => {
  try {
    const createdRating = await Rating.findRec(req.body);
    res.send(createdRating);
  } catch(error) {
    next(error);
  }
});
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
