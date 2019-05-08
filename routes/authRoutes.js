const express = require('express');
const router = express.Router();
const passport = require('passport');
const Product = require('./../models/productModel')

// Custom middleware to check if user is logged in
const checkIfAuthenticated = (req, res, next) => {
  if (!req.user) res.redirect('/login'); // if not logged in / authenticated
  else next(); // if logged in / authenticated
};

// User model
const User = require('../models/user');

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

// GET  '/logout'
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

// GET  '/profile'
router.get('/profile', checkIfAuthenticated, (req, res, next) => {
  console.log('profile req.user._id', req.user._id);

  Product.find({user: req.user._id })
    .then((allProductsFromDB) => {
      res.render('profile', { user: req.user, allProductsFromDB });
    })
    .catch((err) => console.log('error', err));
});

// GET  '/login'
router.get('/login', (req, res, next) => {
  res.render('passport/login', { 'message': req.flash('error') } );
});

// POST  '/login'
router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  passReqToCallback: true
}));

// GET  '/signup'
router.get('/signup', (req, res, next) => {
  res.render('passport/signup');
});

// POST  '/signup'
router.post('/signup', (req, res, next) => {
  const { username, password, email, restaurant, neighborhood } = req.body;

  if (username === '' || password === '') {
    res.render('passport/signup', { message: 'Indicate username and password' });
    return;
  }

  User.findOne({ username })
    .then((user) => {
      if (user !== null) {
        res.render('passport/signup', { message: 'The username already exists' });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      // const location = {
      //   type: 'Point',
      //   cordinates: [41.3975248, 2.1910079]
      //  }

      const newUser = new User({ username, password: hashPass, email, restaurant, neighborhood });
      console.log(newUser);
      newUser.save((err) => {
        if (err) {
          console.log('DB ERROR', err)
          res.render('passport/signup', { message: 'Something went wrong' });
        }
        else res.redirect('/profile');
      });
    })
    .catch(error => next(error));
});

module.exports = router;
