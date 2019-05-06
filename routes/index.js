const express = require('express');
const router = express.Router();
const authRouter = require('./authRoutes');
const prodRouter = require('./prodRoutes');

// *  '/'
router.use('/', authRouter);

// *  '/product'
router.use('/product', prodRouter);

/* GET home page. */
<<<<<<< HEAD
router.get('/', function (req, res, next) {
  res.render('index', { title: 'justShare' });
=======
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
>>>>>>> 13183e9153117d8d272f09f149f5e721a8b56817
});

module.exports = router;
