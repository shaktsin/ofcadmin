/**
 * Created by shaktsin on 2/12/16.
 */

var restUtil = require('../utils/restUtils');
var URLS = require('../utils/urls').URLs;

var userService = exports;


userService.login = function (userName, password, _cb) {
  console.log("Calling login for "+ userName + " "+password);
  var path_param = {username: userName};
  var body_params = {password: password};
  restUtil.post(URLS.get_full_path(URLS.LOGIN_USER, path_param), body_params, _cb);
};


userService.authenticate = function(token, _cb) {
  var body_param = {token: token};
  restUtil.post(URLS.AUTHENTICATE_USER, body_param, _cb);
};


userService.createUser = function (username, password, _cb) {
  var body_param = {username: username, password: password};
  restUtil.post(URLS.CREATE_USER, body_param, _cb);
};


