DROP DATABASE IF EXISTS super_brain_db;
CREATE DATABASE super_brain_db;

USE super_brain_db;

CREATE TABLE spoon_recipe (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userId VARCHAR(30) NOT NULL,
  recipeId INT NOT NULL
);

INSERT INTO spoon_recipe (userId, recipeId)
VALUES ("5fkd2e6dsdr54ga32e5ts1et", 640352);

CREATE TABLE link_recipe (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userId VARCHAR(30) NOT NULL,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(500),
  recipeURL VARCHAR(200) NOT NULL
);

INSERT INTO link_recipe (userId, title, description, recipeURL)
VALUES ("5fkd2e6dsdr54ga32e5ts1et", "Bibimbap","Korean rice with mixed vegetables" ,"https://www.allrecipes.com/recipe/228240/bibimbap-korean-rice-with-mixed-vegetables/");

CREATE TABLE create_recipe (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userId VARCHAR(30) NOT NULL,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(500),
  servings INT,
  prep_time INT,
  prep_unitID INT,
  cook_time INT,
  cook_unitID INT,
  image
);
