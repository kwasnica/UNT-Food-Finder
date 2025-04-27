CREATE DATABASE restaurant_reviews;
\c restaurant_reviews;
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  restaurant_id INT NOT NULL,
  user VARCHAR(255) NOT NULL,
  rating INT CHECK (
    rating BETWEEN 1 AND 5
  ),
  comment TEXT NOT NULL
);
