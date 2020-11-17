const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Rating = require('../lib/models/rating');

describe('ratings routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('creates a rating VIA POST', () => {
    return request(app)
      .post('/rateshoe')
      .send({
        athletes_id: 1,
        shoes_id: 1,
        stars: 1
      })
      .then(res => {
        expect(res.body).toEqual({
          id: null,
          athletes_id: 1,
          shoes_id: 1,
          stars: 1
        });
      });
  });

  it('finds all ratings via GET', async() => {
    const ratings = await Promise.all([
      Rating.insert({ athletes_id: 1, shoes_id: 1, stars: 1 }),
      Rating.insert({ athletes_id: 2, shoes_id: 2, stars: 2 }),
      Rating.insert({ athletes_id: 3, shoes_id: 3, stars: 3 })
    ]);

    return request(app)
      .get('/')
      .then(res => {
        expect(res.body).toEqual(expect.arrayContaining(ratings));
      });
  });
});