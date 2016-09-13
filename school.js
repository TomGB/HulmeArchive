$(".mobile_menu").click(function () {
  console.log("hi");
  $("nav").slideToggle();
});
$(".drop_down").click(function () {
  console.log("hi");
  if($(".mobile_menu").attr("display:block")){
    console.log("asdf");
  }
  $(this).children(".sub_nav").slideToggle();
});
