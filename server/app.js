// app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
app.post("/api/appointments", async (req, res) => {
    const { name, email, date, time } = req.body;

    if (!name || !email || !date || !time) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    try {
        const query = "INSERT INTO appointments (name, email, date, time) VALUES (?, ?, ?, ?)";
        await db.query(query, [name, email, date, time]);

        res.status(201).json({ success: true, message: "Appointment booked successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error." });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
