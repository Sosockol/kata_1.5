// Initialize swiper
const slider = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 'auto',

  on: {
    resize: function enableOnlyMobile(swiper) {
      if (768 <= window.innerWidth) {
        swiper.disable();
        swiper.el.classList.add('-non-slider')
      } else {
        swiper.enable();
        swiper.el.classList.remove('-non-slider');
      }
    }
  }
});