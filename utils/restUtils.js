/**
 * Created by shaktsin on 2/12/16.
 */
var urls = require('../utils/urls');
var http = require('http');
var querystring = require('querystring');

var restUtils = exports;

var performRequest = function(path, method, params, _cb) {
  var dataString = JSON.stringify(params);
  var headers = {};

  if (method === 'GET') {
    endpoint += '?' + querystring.stringify(data);
  }
  else {
    headers = {
      'Content-Type': 'application/json',
      'Content-Length': dataString.length
    };
  }

  var options = {
    host: urls.HOST,
    port: urls.PORT,
    path: path,
    method: method,
    headers: headers
  };

  var req = http.request(options, function(res) {
    var status = res.statusCode;

    if (status < 200 || status > 299) {
      _cb(status, null);
    } else {
      res.setEncoding('utf-8');
      var responseString = '';

      res.on('data', function(data) {
        responseString += data;
      });

      res.on('end', function() {
        console.log(responseString);
        var responseObject = JSON.parse(responseString);
        _cb(null,responseObject);
      });
    }
  });

  req.write(dataString);

  req.on('error', function(err) {
    _cb(err, null);
  });

  req.end();

};

restUtils.get = function(path, params, _cb) {
  console.log("Making get call to url "+path);
};


restUtils.post = function(path, params, _cb) {
  console.log("Making post call to url "+path);
  performRequest(path, 'POST', params, _cb);
};



