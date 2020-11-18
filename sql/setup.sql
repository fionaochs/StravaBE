DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS athletes;
DROP TABLE IF EXISTS shoes;

CREATE TABLE athletes (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT,
  weekly_mileage INT
);
CREATE TABLE shoes (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  terrain TEXT,
  model TEXT,
  avg_rating FLOAT,
  durable_miles INT
);
CREATE TABLE ratings (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  athletes_id INT REFERENCES athletes (id),
  shoes_id INT REFERENCES shoes (id),
  stars FLOAT
);
-- -- id, model, terrain, avg_rating, durable_miles
-- -- CREATE TABLE shoes (id int, model text, terrain text, avg_rating float, durable_miles int);
-- INSERT INTO shoes values (1, 'road', 'Nike Zoom', 300);
-- INSERT INTO shoes values (2,  'trail', 'Altra Lone Peak', 350);
-- INSERT INTO shoes values (3, 'road', 'Brooks Ghost', 250);
-- INSERT INTO shoes values (4, 'trail', 'Salomon Supercross', 400);
-- INSERT INTO shoes values (5, 'trail', 'Brooks Cascadia', 350);
-- INSERT INTO shoes values (6, 'trail', 'Salomon Ultra Pro', 450);
-- INSERT INTO shoes values (7, 'road', 'Nike Pegasus', 300);


-- -- athletes_id, shoes_id, stars
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 1, 3);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 3, 3);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 4, 3);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 5, 3);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 6, 3);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 7, 3);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 1, 3.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 3, 3.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 4, 3.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 5, 3.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 6, 3.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 7, 3.5);

-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 2, 4);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 3, 4);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 4, 4);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 5, 4);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 6, 4);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 7, 4);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 2, 4.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 3, 4.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 4, 4.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 5, 4.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 6, 4.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 7, 4.5);

-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 1, 4);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 2, 3.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 3, 3);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 4, 2.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 6, 3.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 7, 3);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 1, 4.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 2, 3.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 3, 2.5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 4, 5);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 6, 4);
-- INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 7, 2.5);


-- -- id, name, weekly_mileage
-- INSERT INTO athletes values (1, 'Fiona', 15)
-- INSERT INTO athletes values (2, 'Spencer', 20)
-- INSERT INTO athletes values (3, 'Katrina', 10)
-- INSERT INTO athletes values (4, 'Bodhi', 30)