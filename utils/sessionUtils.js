/**
 * Created by shaktsin on 2/16/16.
 */

var sessionUtils = exports;

sessionUtils.SessionManager = {

  initSession: function(req) {
    req.session.session_data = {};
  },

  add: function(req, key, value) {
    var sessionObject = req.session.session_data;
    if (!sessionObject) {
      req.session.session_data = {};
    }
    sessionObject[key] = value;
  },

  get: function(req, key) {
    var sessionObject = req.session.session_data;
    if (sessionObject) {
      return sessionObject[key];
    }
  },

  hasLoggedIn: function(req) {
    return (req.session.session_data) ? true : false ;
  },

  remove: function(req, key) {
    var sessionObject = req.session.session_data;
    if (sessionObject && sessionObject.hasOwnProperty(key)) {
      delete sessionObject['key'];
    }
  },

  destroySession: function(req) {
    var sessionObject = req.session.session_data;
    if (sessionObject) {
      req.session.destroy(function (err) {
        if (err) {
          console.error("could not destroy session object "+err);
        } else {
          console.log("could not destroy session object "+err);
        }
      })
    }
  }
};


