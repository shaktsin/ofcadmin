/**
 * Created by shaktsin on 2/12/16.
 */
$(function () {

  $('#new-user').click(function () {
    $('#login').hide();
    $('#register').show();
  });


  $('#login-back').click(function () {
    $('#register').hide();
    $('#login').show();
  });

  $('#register button').click(function (event) {
    event.preventDefault();

    var name_elem = $(this).parent().find('input[name*=username]');
    var password_elem = $(this).parent().find('input[name*=password]');
    var re_password_elem = $(this).parent().find('input[name*=re-password]');
    var error_elem = $(this).parents('div[class=container]').find('div[class*=js_error]');
    var form_elem = $(this).parents('form');

    error_elem.empty();

    if (!name_elem.val()) {
      error_elem.removeClass('hidden');
      error_elem.append("username is a mandatory field");
      return false;
    }

    if (!password_elem.val()) {
      error_elem.removeClass('hidden');
      error_elem.append("password is a mandatory field");
      return false;
    }

    if (!re_password_elem.val()) {
      error_elem.removeClass('hidden');
      error_elem.append("password is a mandatory field");
      return false;
    }

    if (password_elem.val() != re_password_elem.val()) {
      error_elem.removeClass('hidden');
      error_elem.append("password and re-password did not match, try again");
      return false;
    }

    form_elem.submit();
  })



});
