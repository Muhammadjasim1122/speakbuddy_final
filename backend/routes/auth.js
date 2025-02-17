// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const router = express.Router();

// // // Register
// // router.post('/register', async (req, res) => {
// //   const { name, email, password } = req.body;

// //   try {
// //     let user = await User.findOne({ email });
// //     if (user) {
// //       return res.status(400).json({ msg: 'User already exists' });
// //     }

// //     user = new User({
// //       name,
// //       email,
// //       password,
// //     });

// //     // Hash the password
// //     const salt = await bcrypt.genSalt(10);
// //     user.password = await bcrypt.hash(password, salt);

// //     await user.save();

// //     const payload = { user: { id: user.id } };

// //     jwt.sign(
// //       payload,
// //       process.env.JWT_SECRET,
// //       { expiresIn: 3600 },
// //       (err, token) => {
// //         if (err) throw err;
// //         res.json({ token });
// //       }
// //     );
// //   } catch (err) {
// //     console.error(err.message);
// //     res.status(500).send('Server error');
// //   }
// // });

// // Login route
// // Login route (from routes/auth.js)
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       // Check if the user exists
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ msg: 'Invalid credentials' });
//       }
  
//       // Log the entered password and the stored hashed password
//       console.log('Entered Password:', password);
//       console.log('Stored Hashed Password:', user.password);
  
//       // Compare password with the hashed password in the database
//       const isMatch = await bcrypt.compare(password, user.password);
  
//       // Log the result of the password comparison
//       console.log('Password Match:', isMatch);
  
//       if (!isMatch) {
//         return res.status(400).json({ msg: 'Invalid credentials' });
//       }
  
//       // Generate token on successful login
//       const payload = { user: { id: user.id } };
//       jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       });
  
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server error');
//     }
//   });

// module.exports = router;


// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const router = express.Router();

// // Login route
// // Login route
// router.post('/login', async (req, res) => {
//     console.log('Login route hit');  // Ensure the route is being triggered
  
//     const { email, password } = req.body;
//     console.log('Email:', email);
//     console.log('Entered Password:', password);
  
//     try {
//     //   const user = await User.findOne({ email });
//       const user = await User.findOne({ email: { $regex: new RegExp("^" + email + "$", "i") } });

//       if (!user) {
//         console.log('User not found with email:', email);  // Log if user is not found
//         return res.status(400).json({ msg: 'Invalid credentials' });
//       }
  
//       console.log('Stored Hashed Password:', user.password);
  
//       // Compare entered password with stored hashed password
//       const isMatch = await bcrypt.compare(password, user.password);
//       console.log('Password Match:', isMatch);  // Should log true if passwords match
  
//       if (!isMatch) {
//         console.log('Passwords do not match');
//         return res.status(400).json({ msg: 'Invalid credentials' });
//       }
  
//       console.log('Passwords match. Generating JWT token...');
//       const payload = { user: { id: user.id } };
  
//       jwt.sign(
//         payload,
//         process.env.JWT_SECRET,
//         { expiresIn: 3600 },
//         (err, token) => {
//           if (err) throw err;
//           res.json({ token });
//           console.log('JWT Token generated and sent to frontend');
//         }
//       );
//     } catch (err) {
//       console.error('Server error:', err.message);
//       res.status(500).send('Server error');
//     }
//   });
// module.exports = router;








const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const UserSignup = require('../models/usersignup');

const router = express.Router();

// @route    POST /api/login
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if user exists
      let user = await UserSignup.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // Compare entered password with hashed password in DB
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // Return JWT token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
