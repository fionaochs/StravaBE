const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const ShoeRec = require('../lib/models/shoeRec');

describe('shoe recommendation routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('gets a shoe rec for athlete by id via GET', async() => {
    const rec = await ShoeRec.insert({
      id: 3,
      avg_stars: 2.9574468085106385,
      shoes_id: 1,
      terrain: 'road',
      model: 'Nike Zoom',
      durable_miles: 250
    });
    let athlete_id = 2;
    const response = await request(app)
      .get(`/recathleteshoes/${athlete_id}`);

    expect(response.body).toEqual([{
      avg_stars: 3, 
      durable_miles: 250, 
      id: 3, 
      model: "Brooks Ghost", 
      terrain: "road"
    }]);
  });
});