CREATE TABLE IF NOT EXIST ratings (
  id SERIAL PRIMARY KEY,
  athletes_id INT REFERENCES athletes (id),
  shoes_id INT REFERENCES shoes (id),
  stgars FLOAT
)
CREATE TABLE IF NOT EXIST athletes (
  id SERIAL PRIMARY KEY,
  name TEXT,
  weekly_mileage INT
)
CREATE TABLE IF NOT EXIST shoes (
  id SERIAL PRIMARY KEY,
  terrain TEXT,
  model TEXT,
  avg_rating FLOAT,
  durable_miles INT
)

-- INSERT INTO ratings (

-- )