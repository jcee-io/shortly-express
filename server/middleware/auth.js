const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  if(Object.keys(req.cookies).length === 0) {
    var session = models.Sessions;

    session.create()
    .then(data => session.get({id: data.insertId}))
    .then(data => {
      console.log('hello', res.cookie, req);

      res.cookie('hash', data.hash);
      console.log(res.cookies);

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
