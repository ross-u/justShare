const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Create new product

router.get('/new', (req, res, next) => {
  res.render('passport/new');
});

// Add new product

router.post('/new', (req, res, next) => {
  const { name, description, allergens, location } = req.body;
  const newProduct = new Product({name, description, allergens, location, user: req.user._id});
  newProduct.save()
    .then(product => res.redirect('/profile'))
    .catch(error => res.redirect('/new'));
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
  Product.find({})
    .then((allProductsFromDB) => res.render('showProducts', { allProductsFromDB }))
    .catch((error) => console.log(error));
});

module.exports = router;
