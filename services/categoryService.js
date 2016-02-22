/**
 * Created by shaktsin on 2/22/16.
 */

var restUtil = require('../utils/restUtils');
var URLS = require('../utils/urls').URLs;

var categoryService = exports;

categoryService.get_category_tree = function (_cb) {
  restUtil.get(URLS.GET_CATEGORY_TREE, null, _cb);
};

categoryService.create_or_update_category = function (sname, display_name, parent_id, _cb) {
  var body_param = {sname:sname, display_name: display_name, parent_id: parent_id};
  restUtil.post(URLS.CREATE_OR_UPDATE_CATEGORY, body_param, _cb);
};
