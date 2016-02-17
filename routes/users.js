var express = require('express');
var router = express.Router();
var userService = require('../services/userService');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var cb = function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log("Successfully returned data"+ data);
      res.send('respond with a resource '+JSON.stringify(data));
    }
  };

  userService.login("Shakti", "chinamayee", cb);

});


router.post('/create_user', function (req, res, next) {

  var cb = function (err, data) {
    if (err) {
      // redirect to same page with err
    } else {
      // redirect to the same page with message
    }
  }


});

module.exports = router;
