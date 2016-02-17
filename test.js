/**
 * Created by shaktsin on 2/16/16.
 */

var path = "/identity/{username}/{password}";

var args = {'username':'Shakti', 'password': 'Chinamee'};


path = path.replace(/{\w+}/g, function(x) {
  x = x.replace(/{|}/g, function(y) {
    return "";
  });
  return args[x] || x;
});

console.log(path);