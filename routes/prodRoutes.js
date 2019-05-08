const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const parser = require('./../config/cloudinary');
const User = require('../models/user');
const mongoose = require('mongoose');

// Create new product

router.get('/new', (req, res, next) => {
  res.render('passport/new');
});

// Add new product

router.post('/new', parser.single('image'), (req, res, next) => {
  const { name, description, allergens, location, image } = req.body;
  const user = mongoose.Types.ObjectId(req.user.Id);
  console.log('user', user);
  const newProduct = new Product({ name, description, allergens, location, image, user });
  newProduct.save()
    .then(product => res.redirect('/profile'))
    .catch(() => res.redirect('/new'));
});

// Edit product

router.get('/edit', (req, res, next) => {
  Product.findOne({ _id: req.query.product_id })
    .then(product => res.render('passport/edit', { product }))
    .catch(error => console.log(error));
});

router.post('/edit', (req, res, next) => {
  const { name, description, allergens, location } = req.body;

  Product.update({ _id: req.query.product_id }, { $set: { name, description, allergens, location } }, { new: true })
    .then(product => res.redirect('/profile'))
    .catch(error => console.log(error));
});

// Delete product
router.get('/delete', (req, res, next) => {
  Product.deleteOne( { _id: req.query.product_id })
    .then(product => res.redirect('/profile'))
    .catch(err => console.log(err));
});

// See all Products

router.get('/', (req, res, next) => {
  Product.find()
    .populate('User')
    .then((allProductsFromDB) => {
      console.log(allProductsFromDB)
      res.render('showProducts', { allProductsFromDB })
    })
      .catch((error) => console.log(error));
          // .exec((err, data) => {
          //   if(err) console.log('error', err);
          //   else console.log('POPULATED', data);
          // });
});

// GET users listing

router.get('/', (req, res, next) => {
  User.find()
    .then((restaurants) => {
      console.log(restaurants[0].location.coordinates[0]);
      res.render('index', { restaurants });
    })
    .catch(next);
});

module.exports = router;
