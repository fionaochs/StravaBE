const express = require('express');
const app = express();
const pool = require('./utils/pool');
const Rating = require('./models/rating');
const Shoe = require('./models/shoe');
const Athlete = require('./models/athlete');
const ShoeRec = require('./models/shoeRec');

app.use(express.json());
app.use(require('cors')());

app.get('/', async(req, res, next) => {
  try {
    const foundRating = await Rating.find();
    res.send(foundRating);
  } catch(error) {
    next(error);
  }
});
app.get('/shoes', async(req, res, next) => {
  try {
    const foundShoes = await Shoe.find();
    res.send(foundShoes);
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
app.get('/recshoes', async(req, res, next) => {
  try {
    const foundRecs = await ShoeRec.findRec();
    res.send(foundRecs);
  } catch(error) {
    next(error);
  }
});
app.get('/getrecshoe/:id', async(req, res, next) => {
  try {
    const foundShoe = await Shoe.findById(req.params.id);
    res.send(foundShoe);
  } catch(error) {
    next(error);
  }
});
app.get('/recathleteshoes/:id', async(req, res, next) => {
  try {
    const foundRecs = await ShoeRec.findRecForAthlete(req.params.id);
    res.send(foundRecs);
  } catch(error) {
    next(error);
  }
});
app.post('/rateshoe', async(req, res, next) => {
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
