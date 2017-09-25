DROP DATABASE IF EXISTS library;

CREATE DATABASE IF NOT EXISTS library;

USE library;

CREATE TABLE words (
  `id` INT NOT NULL AUTO_INCREMENT,
  `word` VARCHAR(100),
  PRIMARY KEY (id)
);