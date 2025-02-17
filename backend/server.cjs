
// const express = require('express');
// const connectDB = require('./config/db.cjs');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();

// // Enable CORS
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/signup', require('./routes/signup'));
// app.use('/api', require('./routes/auth'));  // Login route
// app.use('/api/protected', require('./routes/protected')); // Protected route

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require('express');
const connectDB = require('./config/db.cjs'); // Your existing DB connection
const cors = require('cors');
const dotenv = require('dotenv');

const reviewRoutes = require('./routes/reviewRoutes'); // Import review routes

dotenv.config();

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // Allow cookies if needed
}));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/signup', require('./routes/signup'));
app.use('/api', require('./routes/auth'));  // Login route
app.use('/api', require('./routes/protected')); // Protected route

app.use('/api/reviews', reviewRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


