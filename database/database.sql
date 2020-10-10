CREATE DATABASE accounts_db;

USE accounts_db;

CREATE TABLE users(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(32),
    email VARCHAR(32),
    password VARCHAR(32),
    balance INT(11)
);

CREATE TABLE categorys(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name int(15)
);

CREATE TABLE operations(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    concept VARCHAR(50),
    amount int(15),
    type VARCHAR(32),
    id_category INT(11),
    id_user INT(11) ,  
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_category) REFERENCES categorys(id),
    FOREIGN KEY (id_user )REFERENCES users (id)
);


