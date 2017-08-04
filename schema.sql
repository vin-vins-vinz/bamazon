DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(100) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jordan Retro 13", "Athletic Shoes", 199.99, 50),
  ("Nike Foamposite", "Athletic Shoes", 199.99, 50),
  ("Interstella", "DVD", 19.99, 100),
  ("Bourne Supremacy", "DVD", 19.99, 100),
  ("Dark Knight", "DVD", 19.99, 100),
  ("Assassin's Creed", "Video Game", 59.99, 80),
  ("God of War", "Video Game", 59.99, 70),
  ("Metal Gear Solid", "Video Game", 59.99, 70),
  ("Spiderman Action Figure", "Toys", 29.99, 85),
  ("Bat Mobile Model", "Toys", 39.99, 65);