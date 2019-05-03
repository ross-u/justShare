// Passport Setup
const passport = require('passport');
const User = require('./../models/providerModel');

// serializeUser:
passport.serializeUser((userObj, done) => {
  done(null, userObj._id);
});

// deserializeUser:
passport.deserializeUser((idFromCookie, done) => {
  User.findById(idFromCookie)
    .then((userObj) => {          // null as the first argument means NO ERRORS OCCURRED
      done(null, userObj);        // userObj as a second argument is set to the `req.user` when calling `done()`
    })
    .catch((err) => done(err));   // err as the first argument means we tell Passport there was an error
});

module.exports = passport;