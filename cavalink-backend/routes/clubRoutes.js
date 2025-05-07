const express = require('express');
const Club = require('../models/club'); // Import the Club model
const router = express.Router();

// GET all clubs
router.get('/clubs', async (req, res) => {
    try {
        const clubs = await Club.find(); // Fetch all clubs from MongoDB
        res.json(clubs); // Send clubs data as JSON
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;