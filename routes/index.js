const express = require('express');
const router = express.Router();
const authRouter = require('./authRoutes');
const prodRouter = require('./prodRoutes');

// *  '/'
router.use('/', authRouter);

// *  '/product'
router.use('/product', prodRouter);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'justShare' });
});

module.exports = router;
