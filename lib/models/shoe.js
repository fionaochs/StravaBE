const pool = require('../utils/pool');

class Shoe {
  id;
  model;
  terrain;
  avg_rating;
  durable_miles;

  constructor(row){
    this.id = row.id;
    this.model = row.model;
    this.terrain = row.terrain;
    this.avg_rating = row.avg_rating;
    this.durable_miles = row.durable_miles;
  }
  
}