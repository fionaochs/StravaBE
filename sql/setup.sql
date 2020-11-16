CREATE TABLE IF NOT EXIST ratings (
  id serial PRIMARY KEY,
  athletes_id INT REFERENCES athletes (id),
  shoes_id INT REFERENCES shoes (id),
  stars FLOAT
)
CREATE TABLE IF NOT EXIST athletes (
  id serial PRIMARY KEY,
  name TEXT,
  weekly_mileage INT
)
CREATE TABLE IF NOT EXIST shoes (
  id serial PRIMARY KEY,
  terrain TEXT,
  model TEXT,
  avg_rating FLOAT,
  durable_miles INT
)