const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Shoe = require('../lib/models/shoe');

describe('shoe routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('finds all shoes via GET', async() => {
    // const shoes = [{"avg_rating": null, "durable_miles": 300, "id": 1, "model": "Altra Lone Peak", "terrain": "trail"},
    //     {"avg_rating": null, "durable_miles": 250, "id": 3, "model": "Nike Zoom", "terrain": "road"},
    //     {"avg_rating": null, "durable_miles": 350, "id": 2, "model": "Brooks Adrenaline", "terrain": "trail"}];

    return request(app)
      .get('/shoes')
      .then(res => {
        expect(res.body).toContainEqual({
          "avg_rating": null, 
          "durable_miles": 350, 
          "id": 2, 
          "model": "Brooks Adrenaline", 
          "terrain": "trail"
        });
      });
  });

  it('gets shoe by id via GET', async() => {
    let shoe_id = 1;
    const response = await request(app)
      .get(`/getrecshoe/${shoe_id}`);
  
    expect(response.body).toEqual({
      id: 1,
      model: 'Altra Lone Peak',
      terrain: 'trail',
      durable_miles: 300,
      avg_rating: null
    });
  });
});