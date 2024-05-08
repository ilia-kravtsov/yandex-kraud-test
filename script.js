new Swiper(".main__fourth-swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 94,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main__fourth-nav-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".main__fourth-nav-next",
    prevEl: ".main__fourth-nav-prev",
    disabledClass: "swiper-button-disabled",
  },
});
