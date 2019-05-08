const express = require('express');
const router = express.Router();
const authRouter = require('./authRoutes');
const prodRouter = require('./prodRoutes');
const apiRouter = require('./api');

// *  '/'
router.use('/', authRouter);

// *  '/product'
router.use('/product', prodRouter);

// *  '/api'
router.use('/api', apiRouter);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'justShare' });
});

module.exports = router;
