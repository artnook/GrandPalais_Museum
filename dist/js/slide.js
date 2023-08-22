var SlideList = new Swiper(".swipeslide__slide.swiper-container", {
  slidesPerView: "auto",
  //centeredSlides: true,
  //autoHeight : true,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var currentSlide = $(SlideList.slides[SlideList.activeIndex]);
var prevSlide;
var nextSlide;
currentSlide.removeClass("off");

SlideList.on("slideChange", function () {
  currentSlide = $(SlideList.slides[SlideList.activeIndex]);
  prevSlide = SlideList.slides[SlideList.activeIndex - 1];
  nextSlide = SlideList.slides[SlideList.activeIndex + 1];
  currentSlide.removeClass("off");

  if (!$(nextSlide).hasClass("off") || !$(prevSlide).hasClass("off")) {
    $(nextSlide).addClass("off");
    $(prevSlide).addClass("off");
  } else {
    $(currentSlide).removeClass("off");
  }
});
