CREATE TABLE IF NOT EXISTS ratings (
  id INTEGER PRIMARY KEY NOT NULL,
  athletes_id INT REFERENCES athletes (id),
  shoes_id INT REFERENCES shoes (id),
  stgars FLOAT
)
CREATE TABLE IF NOT EXISTS athletes (
  id INTEGER PRIMARY KEY,
  name TEXT,
  weekly_mileage INT
)
CREATE TABLE IF NOT EXISTS shoes (
  id INTEGER PRIMARY KEY,
  terrain TEXT,
  model TEXT,
  avg_rating FLOAT,
  durable_miles INT
)

-- INSERT INTO ratings (

-- )