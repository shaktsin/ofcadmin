/**
 * Created by shaktsin on 2/21/16.
 */

$(function () {

  $('#category_tree .cat_node').click(function (event) {
    //event.preventDefault();
    event.stopPropagation();

    $('#cat_actions').show();

    var cat_clicked = $(this);
    var cat_display_span = $('#action_cat_name');
    var parent_elm = $('#cat_action_form input[name=parent_id]');
    var sname_div = $('#cat_action_form input[name=sname]');
    var display_name_div = $('#cat_action_form input[name=display_name]');
    var update_btn = $('#cat_action_form .update_btn');
    var create_btn = $('#cat_action_form .create_btn');

    cat_display_span.empty();
    var cat_display_name = cat_clicked.attr('cat_display_name');
    var cat_name = cat_clicked.attr('cat_name');
    var data_id = cat_clicked.attr('data_id');

    cat_display_span.append(cat_display_name);
    cat_display_span.attr({'cat_name':cat_name});
    cat_display_span.attr({'cat_display_name':cat_display_name});
    cat_display_span.attr({'data_id':data_id});


    parent_elm.val(cat_clicked.attr('parent_name'));
    parent_elm.attr({'data-id':cat_clicked.attr('parent_id')});

    sname_div.val(cat_clicked.attr('cat_name'));
    display_name_div.val(cat_clicked.attr('cat_display_name'));
    update_btn.show();
    create_btn.hide();

    $('#sub_cat_create').show();



  });

  $('#main_cat_create').click(function (event) {

    event.preventDefault();
    $('#cat_actions').show();

    $('#sub_cat_create').hide();


    var cat_display_span = $('#action_cat_name');
    var parent_elm = $('#cat_action_form input[name=parent_id]');
    var sname_div = $('#cat_action_form input[name=sname]');
    var display_name_div = $('#cat_action_form input[name=display_name]');
    var create_btn = $('#cat_action_form .create_btn');
    var update_btn = $('#cat_action_form .update_btn');

    cat_display_span.empty();
    cat_display_span.append('root');


    parent_elm.val('root');
    parent_elm.attr({'data-id':'1'});

    sname_div.val("");
    display_name_div.val("");

    create_btn.show();
    update_btn.hide();


  });


  $('#sub_cat_create').click(function (event) {

    event.preventDefault();
    $('#cat_actions').show();

    var cat_display_span = $('#action_cat_name');
    var parent_elm = $('#cat_action_form input[name=parent_id]');
    var sname_div = $('#cat_action_form input[name=sname]');
    var display_name_div = $('#cat_action_form input[name=display_name]');

    //cat_display_span.empty();
    //cat_display_span.append(cat_clicked.attr('cat_display_name'));


    parent_elm.val(cat_display_span.attr('cat_display_name'));
    parent_elm.attr({'data-id':cat_display_span.attr('data_id')});

    sname_div.val("");
    display_name_div.val("");

    var create_btn = $('#cat_action_form .create_btn');
    var update_btn = $('#cat_action_form .update_btn');
    create_btn.show();
    update_btn.hide();


  });

  $('#cat_action_form .create_btn').click(function (event) {
    event.preventDefault();
    event.stopPropagation();

    var parent_elm = $('#cat_action_form input[name=parent_id]');
    var sname_div = $('#cat_action_form input[name=sname]');
    var display_name_div = $('#cat_action_form input[name=display_name]');
    var form_elem = $(this).parent();

    var url = '/categories/create';

    if (!sname_div.val()) {
      util.display_form_msg(
        form_elem,
        "sname is a mandatory field",
        null
      );
      return false;
    }

    if (!display_name_div.val()) {
      util.display_form_msg(
        form_elem,
        "sname is a mandatory field",
        null
      );
      return false;
    }

    var data = {
      sname:sname_div.val(),
      display_name: display_name_div.val(),
      parent_id: parent_elm.attr('data-id')
    };

    var success_callback = function (data) {
      console.log(data);
      util.display_form_msg(
        form_elem,
        null,
        "Category Create Successfully, Please reload the page to see changes"
      );
    };

    var error_callback = function (data) {
      util.display_form_msg(
        form_elem,
        data,
        null
      );
    };

    util.make_post_call(
      url,
      data,
      success_callback,
      error_callback
    )

  });



});
