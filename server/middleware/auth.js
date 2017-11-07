const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  if (req.headers.cookie === undefined) {
    var session = models.Sessions;

    session.create()
      .then(data => session.get({id: data.insertId}))
      .then(data => {
        req.session = {
          hash: data.hash
        }
        res.cookie('shortlyid', data.hash);
        next();
      });

  } else {
    next();
  }


  return session;
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/
