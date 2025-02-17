const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  stars: Number, // Store as a number, frontend will convert to stars
  text: String,
  reviewer: String,
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
