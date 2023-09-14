$(function () {
  $(".rn-05 a").on("click", function () {
    $(".rn-05 li").removeClass("on");
    $(".rb-tab-area").removeClass("on");
  });
  $(".rn-05 a").on("click", function () {
    $(this).parent().addClass("on");
    $(".rb-tab-area").addClass("on");
  });
});
