const express = require('express');
const Review = require('../models/Review'); // Ensure correct path to model

const router = express.Router();

// ✅ GET all reviews
router.get('/', async (req, res) => { 
  try {
    const reviews = await Review.find();
    res.json(reviews); // Send JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
});

// ✅ POST a new review
router.post('/', async (req, res) => { 
  try {
    const { stars, text, reviewer } = req.body;

    if (!stars || !text || !reviewer) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newReview = new Review({ stars, text, reviewer });
    await newReview.save();
    
    res.status(201).json({ message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error });
  }
});

module.exports = router;
