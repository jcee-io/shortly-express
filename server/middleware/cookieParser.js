const parseCookies = (req, res, next) => {
  if(req.headers.cookie) {
    var cookie = req.headers.cookie.split('=');
    var key = cookie[0];
    var value = cookie[1];

    var cookies = req.headers.cookie.split('; ').map(item => item.split('='));

    cookies.forEach(item => {
      req.cookies[item[0]] = item[1];
    });

  }

  next();
};

module.exports = parseCookies;
