var swiper = new Swiper(`[unique-script-id="w-w-dm-id"] .mySwiper`, {
    pagination: {
      el: `[unique-script-id="w-w-dm-id"] .swiper-pagination`,
      clickable: true,
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 50,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      890: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });