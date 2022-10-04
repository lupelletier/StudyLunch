create DATAbase study_lunch;

CREATE TABLE restaurants (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(64)
);

CREATE TABLE restaurants_details(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    distance INT,
    food VARCHAR(64),
    consumption VARCHAR(64),
    price INT,
    restaurants_id INT
);

ALTER TABLE restaurants_details ADD FOREIGN KEY (restaurants_id) REFERENCES restaurants(id);