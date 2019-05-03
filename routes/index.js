const express = require('express');
const router = express.Router();
const authRouter = require('./authRoutes');

// *  '/'
router.use('/', authRouter);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'justShare' });
});

module.exports = router;
