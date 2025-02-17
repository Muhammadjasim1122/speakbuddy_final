const mongoose = require('mongoose');
const Review = require('./models/Review');

mongoose.connect('mongodb://localhost:27017/reviewsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch(err => console.error(err));

const seedReviews = async () => {
  await Review.deleteMany({});
  await Review.insertMany([
    { stars: 5, text: 'Amazing improvement in my child\'s speech development!', reviewer: '- Sarah M.' },
    { stars: 5, text: 'The interactive exercises make therapy fun and engaging.', reviewer: '- John D.' },
    { stars: 4, text: 'Very helpful exercises and well-structured learning path.', reviewer: '- Emily R.' }
  ]);
  console.log('Reviews added');
  mongoose.connection.close();
};

seedReviews();
