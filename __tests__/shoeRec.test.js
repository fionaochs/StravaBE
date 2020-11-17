const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const ShoeRec = require('../lib/models/shoeRec');

describe('shoe recommendation routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  
  // it('gets top recommended shoes VIA GET', async() => {
  //   const shoeRecs = await Promise.all([
  //     ShoeRec.insert({ avg_stars: 2.5, shoes_id: 1, stars: 2, terrain: 'road', model: 'Nike', durable_miles: 300}),
  //     ShoeRec.insert({ avg_stars: 3.5, shoes_id: 2, stars: 4, terrain: 'trail', model: 'Altra', durable_miles: 350 }),
  //     ShoeRec.insert({ avg_stars: 4.5, shoes_id: 3, stars: 5, terrain: 'trail', model: 'Brooks', durable_miles: 400 })
  //   ]);

  //   return request(app)
  //     .get('/')
  //     .then(res => {
  //       expect(res.body).toContain(expect.arrayContaining(shoeRecs));
  //     });
  // });

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
  
    expect(response.body).toContainEqual({
      avg_stars: expect.any(Number), 
      durable_miles: 250, 
      id: 3, 
      model: "Nike Zoom", 
      terrain: "road"
    });
  });
});