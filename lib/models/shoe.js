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

  static async insert(shoe) {
    const { rows } = await pool.query(
      'INSERT INTO shoes (model, terrain, avg_rating, durable_miles) VALUES ($1, $2, $3, $4) RETURNING *',
      [shoe.model, shoe.terrain, shoe.avg_rating, shoe.durable_miles]
    );

    return new Shoe(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM shoes WHERE id = $1',
      [id]
    );

    if(!rows[0]) return null;
    else return new Shoe(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query(
      'SELECT * FROM shoes'
    );

    return rows.map(row => new Shoe(row));
  }

  static async update(id, updatedshoe) {
    const { rows } = await pool.query(
      `UPDATE shoes
       SET model=$1,
           terrain=$2,
           avg_rating=$3,
           durable_miles=$4,
       WHERE id = $5
       RETURNING *
      `,
      [updatedShoe.model, updatedShoe.terrain, updatedShoe.avg_rating, updatedShoe.durable_miles, id]
    );

    return new Shoe(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM shoes WHERE id = $1 RETURNING *',
      [id]
    );

    return new Shoe(rows[0]);
  }
}

module.exports = Shoe;
