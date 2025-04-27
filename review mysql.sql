CREATE DATABASE restaurant_reviews;
USE restaurant_reviews;
CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  restaurant_id INT NOT NULL,
  user VARCHAR(255) NOT NULL,
  rating INT CHECK (
    rating BETWEEN 1 AND 5
  ),
  comment TEXT NOT NULL
);
