DROP DATABASE IF EXISTS super_brain_db;
CREATE DATABASE super_brain_db;

USE super_brain_db;

CREATE TABLE recipe (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  recipe_id VARCHAR(30) NOT NULL,
  user_id VARCHAR(30) NOT NULL,
  title VARCHAR(100) NOT NULL,
  image VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO recipe (recipe_id, user_id, title, image)
VALUES (642594,"5fkd2e6dsdr54ga32e5ts1et","Farfalle with Shrimps, Tomatoes Basil Sauce","https://spoonacular.com/recipeImages/642594-312x231.jpg" );
