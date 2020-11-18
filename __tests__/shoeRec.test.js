const fs = require('fs');
const testPool = require('../lib/utils/testPool');
const request = require('supertest');
const app = require('../lib/app');
const ShoeRec = require('../lib/models/shoeRec');

describe('shoe recommendation routes', () => {
  beforeEach(() => {
    return testPool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  it('gets a shoe rec for athlete by id via GET', async() => {
    let athlete_id = 2;
    const response = await request(app)
      .get(`/recathleteshoes/${athlete_id}`);

    expect(response.body).toEqual([{
      avg_stars: expect.any(Number), 
      durable_miles: 300, 
      id: 1, 
      model: "Nike Zoom", 
      terrain: "road"
    }]);
  });

  it('shoe rec for athlete by id via GET does not match shoe they already rated', async() => {
    let athlete_id = 2;
    const response = await request(app)
      .get(`/recathleteshoes/${athlete_id}`);

    expect(response.body).not.toEqual([{
      avg_stars: expect.any(Number), 
      durable_miles: 350, 
      id: 2, 
      model: "Altra Lone Peak", 
      terrain: "trail"
    }]);
  });
});