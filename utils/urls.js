/**
 * Created by shaktsin on 2/12/16.
 */
  
var config = require('../config');

var URLs = {

  CREATE_USER: '/identity/create',
  LOGIN_USER: '/identity/login/{username}',
  AUTHENTICATE_USER: '/identity/authenticate',

  GET_CATEGORY_TREE: '/category-tree',
  CREATE_OR_UPDATE_CATEGORY: '/category',


  get_full_path: function(path, args) {
    path = path.replace(/{\w+}/g, function(x) {
      x = x.replace(/{|}/g, function(y) {
        return "";
      });
      return args[x] || x;
    });
    return path;
  }
};


module.exports.URLs = URLs;
module.exports.HOST = config.SERVER_HOST;
module.exports.PORT = config.SERVER_PORT;