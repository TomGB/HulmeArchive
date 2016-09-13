$(document).ready(function() {
  $(".mobile_menu").click(function () {
    if(!$("nav.mobile_nav").hasClass("active")){
      $("nav.mobile_nav").addClass("active");
    }else{
      $("nav.mobile_nav").removeClass("active");
    }
  });

  $("nav.desktop_nav .drop_down").on('mouseenter', function() {
    $(this).children(".sub_nav").addClass("active");
  }).on('mouseleave', function(){
      $(".sub_nav").removeClass("active");
  });

  $("nav.mobile_nav .drop_down").on('click', function() {
    $(".sub_nav").removeClass("active");
    $(this).children(".sub_nav").slideToggle();
  })
});
