const pool = require('../utils/pool');

class Athlete {
  id;
  name;
  weekly_mileage;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.weekly_mileage = row.weekly_mileage;
  }

  static async insert(athlete) {
    const { rows } = await pool.query(
      'INSERT INTO Athletes (name, weekly_mileage) VALUES ($1, $2) RETURNING *',
      [athlete.name, athlete.weekly_mileage]
    );

    return new Athlete(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM athletes WHERE id = $1',
      [id]
    );

    if(!rows[0]) return null;
    else return new Athlete(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query(
      'SELECT * FROM athletes'
    );

    return rows.map(row => new Athlete(row));
  }

  // static async findRec() {
  //   const { rows } = await pool.query(
  //     'SELECT * FROM athletes'
  //   );

  //   return rows.map(row => new Athlete(row));
  // }

  static async update(id, updatedAthlete) {
    const { rows } = await pool.query(
      `UPDATE athletes
       SET name=$1,
           weekly_mileage=$2,
       WHERE id = $4
       RETURNING *
      `,
      [updatedAthlete.name, updatedAthlete.weekly_mileage, id]
    );

    return new Athlete(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM athletes WHERE id = $1 RETURNING *',
      [id]
    );

    return new Athlete(rows[0]);
  }
}

module.exports = Athlete;