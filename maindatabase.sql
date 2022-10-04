create DATAbase study_lunch;

CREATE TABLE restaurants (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    restaurant_name VARCHAR(64),
    distance INT,
    food VARCHAR(64),
    consumption VARCHAR(64),
    price INT
);
