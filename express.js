require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) console.error("Database connection error:", err);
    else console.log("Connected to database");
});

// Get reviews for a restaurant
app.get("/api/reviews/:restaurantId", (req, res) => {
    const sql = "SELECT * FROM reviews WHERE restaurant_id = ?";
    db.query(sql, [req.params.restaurantId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Post a new review
app.post("/api/reviews", (req, res) => {
    const { restaurantId, user, rating, comment } = req.body;
    const sql = "INSERT INTO reviews (restaurant_id, user, rating, comment) VALUES (?, ?, ?, ?)";
    db.query(sql, [restaurantId, user, rating, comment], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Review added successfully" });
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
