const express = require('express');
const cors = require('cors'); // Import the 'cors' middleware

const app = express();

// Enable CORS for all routes
app.use(cors());

// Define a route to handle the '/quote' endpoint
app.get('/quote', (req, res) => {
    // Replace this with your actual quote data or retrieval logic
    const quote = {
        quote: "This is the quote from the backend.",
        author: "Unknown"
    };

    // Set CORS headers to allow requests from any origin
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // Send the quote as a JSON response
    res.json(quote);
});

// Start your server on port 8080
const port = 8080;
app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});

