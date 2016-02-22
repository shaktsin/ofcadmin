/**
 * Created by shaktsin on 2/21/16.
 */
var express = require('express');
var router = express.Router();
var sessionService = require('../utils/sessionUtils');
var categoryService = require('../services/categoryService');

//var category_tree = '{    "cat_name": "root",    "children": [        {            "cat_name": "prog_lang",            "children": [                {                    "cat_name": "java",                    "display_name": "Java",                    "id": 3,                    "lft": 3,                    "rgt": 4                },                {                    "cat_name": "c",                    "display_name": "C",                    "id": 4,                    "lft": 5,                    "rgt": 6                },                {                    "cat_name": "python",                    "display_name": "Python",                    "id": 5,                    "lft": 7,                    "rgt": 8                }            ],            "display_name": "Programming Languages",            "id": 2,            "lft": 2,            "rgt": 9        },        {            "cat_name": "social_sci",            "children": [                {                    "cat_name": "history",                    "display_name": "History",                    "id": 7,                    "lft": 11,                    "rgt": 12                },                {                    "cat_name": "geo",                    "display_name": "Geography",                    "id": 8,                    "lft": 13,                    "rgt": 14                }            ],            "display_name": "Social Sciences",            "id": 6,            "lft": 10,            "rgt": 15        }    ],    "display_name": "root",    "id": 1,    "lft": 1,    "rgt": 16}';

router.get('/', function(req, res, next) {
  //if (!sessionService.SessionManager.hasLoggedIn(req)) {
  //  res.redirect('/auth?next='+req.path)
  //}

  var callback = function (err, data) {
    if (err) {

    } else {
      var username = sessionService.SessionManager.get(req,"username");
      res.render(
        'pages/category',
        {
          username: username,
          cat_tree: data.children
        }
      );
    }
  };

  categoryService.get_category_tree(callback);

});

router.post('/create', function(req, res, next) {

  var callback = function(err, data) {
    if (err) {
      res.status(500).json({msg: err});
    } else {
      res.json({msg: data});
    }
  };

  categoryService.create_or_update_category(
    req.body.sname,
    req.body.display_name,
    parseInt(req.body.parent_id),
    callback
  );

});


module.exports = router;



