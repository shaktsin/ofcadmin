var express = require('express');
var router = express.Router();
var sessionService = require('../utils/sessionUtils');

/* GET home page. */
router.get('/', function(req, res, next) {
  // first try to authenticate and then login
  if (!sessionService.SessionManager.hasLoggedIn(req)) {
    res.redirect('/auth?next='+req.path)
  }

  var username = sessionService.SessionManager.get(req,"username");
  res.render('pages/index', {username: username});
});

module.exports = router;
