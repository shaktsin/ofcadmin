/**
 * Created by shaktsin on 1/13/16.
 */


var utility  = function() {

  this.display_form_msg = function (form_elem, err, msg) {
    var error_elem = form_elem.find('.error');
    var success_elem = form_elem.find('.success');
    success_elem.empty();
    error_elem.empty();

    success_elem.removeClass('hidden');
    error_elem.removeClass('hidden');

    if (err) {
      success_elem.addClass('hidden');
      error_elem.append(err);
    }

    if (msg) {
      error_elem.addClass('hidden');
      success_elem.append(msg);
    }

  };

  //var csrftoken = $.cookie('csrftoken');
  //
  //function csrfSafeMethod(method) {
  //  // these HTTP methods do not require CSRF protection
  //  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
  //}
  //
  //$.ajaxSetup({
  //  beforeSend: function (xhr, settings) {
  //    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
  //      xhr.setRequestHeader("X-CSRFToken", csrftoken);
  //    }
  //  }
  //});

  this.make_post_call = function (url, data, success_cb, error_cb) {
    $.ajax( {
      url: url,
      type: "POST",
      data: data,
      traditional:true,
      success: success_cb,
      error: error_cb
    });
  };

};

var util = new utility();