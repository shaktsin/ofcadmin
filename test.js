/**
 * Created by shaktsin on 2/16/16.
 */

var path = "/identity/{username}/{password}";

var args = {'username':'Shakti', 'password': 'Chinamee'};
var category_tree = '{    "cat_name": "root",    "children": [        {            "cat_name": "prog_lang",            "children": [                {                    "cat_name": "java",                    "display_name": "Java",                    "id": 3,                    "lft": 3,                    "rgt": 4                },                {                    "cat_name": "c",                    "display_name": "C",                    "id": 4,                    "lft": 5,                    "rgt": 6                },                {                    "cat_name": "python",                    "display_name": "Python",                    "id": 5,                    "lft": 7,                    "rgt": 8                }            ],            "display_name": "Programming Languages",            "id": 2,            "lft": 2,            "rgt": 9        },        {            "cat_name": "social_sci",            "children": [                {                    "cat_name": "history",                    "display_name": "History",                    "id": 7,                    "lft": 11,                    "rgt": 12                },                {                    "cat_name": "geo",                    "display_name": "Geography",                    "id": 8,                    "lft": 13,                    "rgt": 14                }            ],            "display_name": "Social Sciences",            "id": 6,            "lft": 10,            "rgt": 15        }    ],    "display_name": "root",    "id": 1,    "lft": 1,    "rgt": 16}';


path = path.replace(/{\w+}/g, function(x) {
  x = x.replace(/{|}/g, function(y) {
    return "";
  });
  return args[x] || x;
});

console.log(path);

console.log(JSON.parse(category_tree).children);