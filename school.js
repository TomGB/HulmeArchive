$(document).ready(function() {

  var close_other_mobile_navs_on_click = false;

  /*
    shows and hides the entire mobile navigation
  */
  $(".mobile_menu").click(function () {
    if(!$("nav.desktop_nav").hasClass("active")){
      $("nav.desktop_nav").addClass("active");
    }else{
      $("nav.desktop_nav").removeClass("active");
    }
  });

  /*
    shows and hides the dropdowns on the desktop nav
  */

  $("nav.desktop_nav .drop_down").on('mouseenter', function() {
    if (window.matchMedia('(min-width: 800px)').matches) {
      $(this).children(".sub_nav").addClass("active");
    }
  }).on('mouseleave', function(){
    if (window.matchMedia('(min-width: 800px)').matches) {
      $(".sub_nav").removeClass("active");
    }
  });

  /*
    When the nav is in mobile form
    when a drow down is clicked it sets all dropdowns to
    not visible then sets the current dropdown to visible
    or invisible if it is currently visible
  */

  $("nav.desktop_nav .drop_down").on('click', function() {
    if (window.matchMedia('(max-width: 800px)').matches) {
      var sub_nav = $(this).children(".sub_nav")
      if(!sub_nav.hasClass("active")) {
        if(close_other_mobile_navs_on_click){
          $(".sub_nav").removeClass("active");
        }
        sub_nav.addClass("active");
      }else{
        sub_nav.removeClass("active");
      }
    }
  })

  var posY = $('.nav_area').position().top;
  console.log(posY)

  $(window).scroll(function(e){
    var $el = $('.fixed_nav');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > posY && !isPositionFixed){
      $('.fixed_nav').css({'position': 'fixed', 'top': '0px'});
    }
    if ($(this).scrollTop() < posY && isPositionFixed)
    {
      $('.fixed_nav').css({'position': 'static', 'top': '0px'});
    }
  });
});
