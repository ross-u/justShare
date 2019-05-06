const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const parser = require('./../config/cloudinary');

// Create new product

router.get('/new', (req, res, next) => {
  res.render('passport/new');
});

// Add new product

router.post('/new', parser.single('image'), (req, res, next) => {
  const { name, description, allergens, location, image } = req.body;
  const newProduct = new Product({ name, description, allergens, location, image, user: req.user._id });
  newProduct.save()
    .then(product => res.redirect('/profile'))
    .catch(error => res.redirect('/new'));
});

// See all Products

router.get('/', (req, res, next) => {
  Product.find({})
    .then((allProductsFromDB) => res.render('showProducts', { allProductsFromDB }))
    .catch((error) => console.log(error));
});

module.exports = router;
