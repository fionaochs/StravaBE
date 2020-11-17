-- CREATE TABLE IF NOT EXISTS ratings (
--   id INTEGER PRIMARY KEY NOT NULL,
--   athletes_id INT REFERENCES athletes (id),
--   shoes_id INT REFERENCES shoes (id),
--   stars FLOAT
-- )
-- CREATE TABLE IF NOT EXISTS athletes (
--   id INTEGER PRIMARY KEY,
--   name TEXT,
--   weekly_mileage INT
-- )
-- CREATE TABLE IF NOT EXISTS shoes (
--   id INTEGER PRIMARY KEY,
--   terrain TEXT,
--   model TEXT,
--   avg_rating FLOAT,
--   durable_miles INT
-- )

-- id, model, terrain, avg_rating, durable_miles
-- CREATE TABLE shoes (id int, model text, terrain text, avg_rating float, durable_miles int);
INSERT INTO shoes values (1, 'Nike Zoom', 'road', 300);
INSERT INTO shoes values (2, 'Altra Lone Peak', 'trail', 350);
INSERT INTO shoes values (3, 'Brooks Ghost','road', 250);
INSERT INTO shoes values (4, 'Salomon Supercross','trail', 400);
INSERT INTO shoes values (5, 'Brooks Cascadia','trail', 350);
INSERT INTO shoes values (6, 'Salomon Ultra Pro','trail', 450);
INSERT INTO shoes values (7, 'Nike Pegasus','road', 300);


-- athletes_id, shoes_id, stars
-- INSERT INTO ratings values (1, 1, 3);
-- INSERT INTO ratings values (1, 1, 3);
-- INSERT INTO ratings values (1, 1, 3);
-- INSERT INTO ratings values (1, 1, 3);

-- INSERT INTO ratings values (2, 1, 3);
-- INSERT INTO ratings values (2, 1, 3);
-- INSERT INTO ratings values (2, 1, 3);
-- INSERT INTO ratings values (2, 1, 3);

-- INSERT INTO ratings values (3, 1, 3);
-- INSERT INTO ratings values (3, 1, 3);
-- INSERT INTO ratings values (3, 1, 3);
-- INSERT INTO ratings values (3, 1, 3);

-- INSERT INTO ratings values (4, 1, 3);
-- INSERT INTO ratings values (4, 1, 3);
-- INSERT INTO ratings values (4, 1, 3);
-- INSERT INTO ratings values (4, 1, 3);

-- id, name, weekly_mileage
-- INSERT INTO athletes values (1, 'Fiona', 15)
-- INSERT INTO athletes values (2, 'Spencer', 20)
-- INSERT INTO athletes values (3, 'Katrina', 10)