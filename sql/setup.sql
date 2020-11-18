DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS athletes;
DROP TABLE IF EXISTS shoes;

CREATE TABLE athletes (
  id SERIAL PRIMARY KEY,
  ath_name TEXT,
  weekly_mileage INT
);
CREATE TABLE shoes (
  id SERIAL PRIMARY KEY,
  terrain TEXT,
  model TEXT,
  avg_rating FLOAT,
  durable_miles INT
);
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  athletes_id INT REFERENCES athletes (id),
  shoes_id INT REFERENCES shoes (id),
  stars FLOAT
);

INSERT INTO shoes (terrain, model, durable_miles) values ('road', 'Nike Zoom', 300);
INSERT INTO shoes (terrain, model, durable_miles) values ('trail', 'Altra Lone Peak', 350);
INSERT INTO shoes (terrain, model, durable_miles) values ('road', 'Brooks Ghost', 250);
INSERT INTO shoes (terrain, model, durable_miles) values ('trail', 'Salomon Supercross', 400);
INSERT INTO shoes (terrain, model, durable_miles) values ('trail', 'Brooks Cascadia', 350);
INSERT INTO shoes (terrain, model, durable_miles) values ('trail', 'Salomon Ultra Pro', 450);
INSERT INTO shoes (terrain, model, durable_miles) values ('road', 'Nike Pegasus', 300);


INSERT INTO athletes (ath_name, weekly_mileage) values ('Fiona', 15);
INSERT INTO athletes (ath_name, weekly_mileage) values ('Spencer', 20);
INSERT INTO athletes (ath_name, weekly_mileage) values ('Katrina', 10);
INSERT INTO athletes (ath_name, weekly_mileage) values ('Bodhi', 30);

INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 1, 3);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 3, 3);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 4, 3);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 5, 3);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 6, 3);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 7, 3);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 1, 3.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 3, 3.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 4, 3.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 5, 3.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 6, 3.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (1, 7, 3.5);

INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 2, 4);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 3, 4);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 4, 4);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 5, 4);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 6, 4);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 7, 4);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 2, 4.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 3, 4.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 4, 4.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 5, 4.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 6, 4.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (2, 7, 4.5);

INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 1, 4);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 2, 3.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 3, 3);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 4, 2.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 6, 3.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 7, 3);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 1, 4.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 2, 3.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 3, 2.5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 4, 5);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 6, 4);
INSERT INTO ratings (athletes_id, shoes_id, stars) values (3, 7, 2.5);

