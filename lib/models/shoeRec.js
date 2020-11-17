const pool = require('../utils/pool');

class ShoeRec {
  id;
  avg_stars;
  shoes_id;
  stars;
  terrain;
  model;
  durable_miles;

  constructor(row) {
    this.id = row.id;
    this.avg_stars = row.avg_stars;
    this.shoes_id = row.shoes_id;
    this.stars = row.stars;
    this.terrain = row.terrain;
    this.model = row.model;
    this.durable_miles = row.durable_miles;
  }

  static async insert(shoeRec) {
    const { rows } = await pool.query(
      'INSERT INTO shoerec (avg_stars, shoes_id, stars, terrain, model, durable_miles) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [shoeRec.avg_stars, shoeRec.shoes_id, shoeRec.stars, shoeRec.terrain, shoeRec.model, shoeRec.durable_miles]
    );

    return new ShoeRec(rows[0]);
  }

  static async findRec() {
    const { rows } = await pool.query(
      `SELECT * FROM
      (SELECT shoes_id, AVG(stars) as avg_stars
      FROM ratings
      GROUP BY shoes_id) as avg_stars_table
      INNER JOIN shoes on shoes.id = avg_stars_table.shoes_id
      ORDER BY avg_stars DESC
      `
    );

    return rows.map(row => new ShoeRec(row));
  }

  static async findRecForAthlete(athlete_id) {
    const { rows } = await pool.query(
      `SELECT * FROM
      (SELECT r2.shoes_id as shoe_ids, AVG(r2.stars) as avg_stars
      FROM ratings r1 INNER JOIN ratings r2
        ON r1.athletes_id = ${athlete_id}
        AND r2.athletes_id != ${athlete_id}
        AND r2.shoes_id NOT IN (SELECT shoes_id 
                                FROM ratings 
                                WHERE athletes_id = ${athlete_id})
      GROUP BY (r2.shoes_id)
      HAVING AVG(r2.stars)>=2) as rec_shoe_ids
      INNER JOIN shoes
      ON rec_shoe_ids.shoe_ids = shoes.id

      `
    );

    return rows.map(row => new ShoeRec(row));
  }
}

module.exports = ShoeRec;