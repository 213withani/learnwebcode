$(document).ready(function() {
  $(window).scroll(function() {
    $(".example-photo").css("opacity",0);

    var windowHeight=$(window).height();
    var windowScrollPosTop=$(window).scrollTop();
    var windowScrollPosBottom=windowHeight+windowScrollPosTop;

    var objectOffset=$(".example-photo").offset();
    var objectOffsetTop=objectOffset.top;
    $(".status").html(objectOffsetTop);

    if (windowScrollPosBottom>objectOffsetTop) {

        $(".example-photo").animate({"opacity":1},3000);
    }
  });
});
