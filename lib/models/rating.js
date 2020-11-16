const pool = require('../utils/pool');

class Rating {
  id;
  athletes_id;
  shoes_id;
  stars;

  constructor(row) {
    this.id = row.id;
    this.athletes_id = row.athletes_id;
    this.shoes_id = row.shoes_id;
    this.stars = row.stars;
  }

  static async insert(rating) {
    const { rows } = await pool.query(
      'INSERT INTO ratings (athletes_id, shoes_id, stars) VALUES ($1, $2, $3) RETURNING *',
      [rating.athletes_id, rating.shoes_id, rating.stars]
    );

    return new Rating(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM ratings WHERE id = $1',
      [id]
    );

    if(!rows[0]) return null;
    else return new Rating(rows[0]);
  }

  static async findAvg(id) {
    const { rows } = await pool.query(
      'SELECT AVG(stars)::NUMERIC(10,2) FROM ratings WHERE shoes_id = $1',
      [id]
    );

    if(!rows[0]) return null;
    else return new Rating(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query(
      'SELECT * FROM ratings'
    );

    return rows.map(row => new Rating(row));
  }

  static async update(id, updatedRating) {
    const { rows } = await pool.query(
      `UPDATE ratings
       SET athletes_id=$1,
           shoes_id=$2,
           stars=$3
       WHERE id = $4
       RETURNING *
      `,
      [updatedRating.athletes_id, updatedRating.shoes_id, updatedRating.stars, id]
    );

    return new Rating(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM ratings WHERE id = $1 RETURNING *',
      [id]
    );

    return new Rating(rows[0]);
  }
}

module.exports = Rating;