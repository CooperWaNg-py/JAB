// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for all routes (to allow requests from the frontend)
app.use(cors());

// Initialize counter
let counter = 0;

// Endpoint to get the current counter value
app.get('/counter', (req, res) => {
    res.json({ counter });
});

// Endpoint to increment the counter
app.post('/increment', (req, res) => {
    counter++;
    res.json({ counter });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
