/**
 * Created by shaktsin on 2/12/16.
 */
var express = require('express');
var router = express.Router();
var userService = require('../services/userService');
var sessionService = require('../utils/sessionUtils');
var roleManager = require('../utils/rolesUtils');
var errorManager = require('../utils/errors');

var TIME_STAMP = 30*24*60*60*1000; // 30 days

router.get('/', function(req, res, next) {
  var login_url = '/auth/login';
  if (req.param('next')) {
    login_url = '/auth/login?next='+ req.param('next');
  }

  if (req.param('error')) {
    var error = {msg: errorManager.Errors[req.param('error')]}
  }
  res.render('pages/login', {err: error, url: login_url});
});


// login user
router.post('/login', function(req, res, next) {
  var token = sessionService.SessionManager.get(req, 'authentication_token');
  var login_url = '/auth/login';
  if (req.param('next')) {
    login_url = '/auth/login?next='+ req.param('next');
  }

  if (token) {
    var cb = function (err, data) {
      if (err) {
        // redirect with the err
        var error_code = errorManager.ErrorCodes.TOKEN_EXPIRED;
        console.error(err);
        if (err == 404) {
          error_code = errorManager.ErrorCodes.NOT_REGISTERED_USER;
        } else {
          error_code = errorManager.ErrorCodes.SOMETHING_WRONG;
        }

        res.redirect('/auth?error='+error_code);
      } else {
        if (req.param('next')) {
          res.redirect(req.param('next'));
        } else {
          res.redirect('/');
        }
      }
    };
    // authenticate from auth token
    userService.authenticate(token, cb);

  } else {
    var login_cb = function (err, data) {
      if (err) {
        var error_code = errorManager.ErrorCodes.CREDENTIALS_WRONG;
        console.error(err);
        if (err == 404) {
          error_code = errorManager.ErrorCodes.NOT_REGISTERED_USER;
        } else {
          error_code = errorManager.ErrorCodes.SOMETHING_WRONG;
        }
        res.redirect('/auth?error='+error_code);
      } else {

        if (data.roles.role && data.roles.role.indexOf(roleManager.ROLES.SUPER_USER) != -1) {
          sessionService.SessionManager.initSession(req);
          sessionService.SessionManager.add(req, 'username', data['username']);
          sessionService.SessionManager.add(req, 'authentication_token', data['authentication_token']);
          //res.redirect('/')
          if (req.param('next')) {
            res.redirect(req.param('next'));
          } else {
            res.redirect('/');
          }
        } else {
          error_code = errorManager.ErrorCodes.NOT_AUTHORISED;
          res.redirect('/auth?error='+error_code);
        }
      }
    };
    userService.login(req.body.username, req.body.password, login_cb);
  }
});


router.post('/create', function (req, res, next) {
  var login_url = '/auth/login';
  var error = {msg: null};
  var cb = function (err, data) {
    var error_code;
    if (err) {
      error_code = errorManager.ErrorCodes.SOMETHING_WRONG;
    } else {
      error_code = errorManager.ErrorCodes.NOT_AUTHORISED;
    }
    res.redirect('/auth?error='+error_code);
  };
  userService.createUser(req.body.username, req.body.password, cb);
});

// logout user
router.get('/logout', function (req, res, next) {
  //if (req.cookies['remember']) {
  //  // Don't delete destroy session
  //} else {
  //  // destroy session
  //  // also delete the remember cookie
  //  //res.clearCookie('remember');
  //
  //}
  sessionService.SessionManager.destroySession(req);
  // now redirect to the login page
  res.redirect('/auth');
});

module.exports = router;