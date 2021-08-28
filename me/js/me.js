darkModeButton();   

function themaModeDark() {
  var $_cookieThemaMode= {
    "body" : "dark-mode",
    "nav" : "navbar-dark",
    "aside" : "control-sidebar-dark", 
  };

var jsonVeri=JSON.stringify($_cookieThemaMode);
  $.cookie('themeMode', jsonVeri, { expires: 1000 });   
  $('body').addClass('dark-mode')
  $('nav').removeClass('navbar-white')
  $('nav').addClass('navbar-dark')
  $('aside').addClass('control-sidebar-dark')
  $('aside').removeClass('control-sidebar-light')
  $('aside .card').addClass('control-sidebar-dark')
  $('.textScreenColor').removeClass('textBlack')
  $('.darkCheck').prop('checked', true); 
} 

function themaModeLight() {
  var $_cookieThemaMode= {
    "body" : " ",
    "nav" : "navbar-light",
    "aside" : "control-sidebar-light", 
  };
  var jsonVeri=JSON.stringify($_cookieThemaMode);
  $.cookie('themeMode', jsonVeri, { expires: 1000 });  

  $('body').removeClass('dark-mode')
  $('nav').removeClass('navbar-dark') 
  $('nav').addClass('navbar-white')
  $('nav').removeClass('control-sidebar-dark') 
  $('aside').addClass('control-sidebar-light')
  $('aside .card').removeClass('control-sidebar-dark') 
  $('.textScreenColor').addClass('textBlack')
  $('.darkCheck').prop('checked', false); 
}

function fun_darkMode(check) { //demo.js üzerinden change için çağırılıyor 
  if ($(check).is(':checked')) {
    themaModeDark();
  } else {
    themaModeLight();
  }    
}   

function darkModeButton() {
  var $sidebar = $('.control-sidebar')
  var $container = $('<div />', {
    class: 'p-3 control-sidebar-content'
  }) 
  $sidebar.append($container) 

  var $dark_mode_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('dark-mode'),
    class: 'mr-1 darkCheck',
    style: 'margin-top:30px'
  }).on('click', function () {
    fun_darkMode(this);
  }) 
  var $dark_mode_container = $('<div />', { class: '' }).append($dark_mode_checkbox).append('<span>Dark Mode</span>')
  $container.append($dark_mode_container);
}