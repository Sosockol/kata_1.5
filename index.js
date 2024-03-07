// Initialize swiper
const slider = new Swiper('.swiper', {
  pagination: {
    el: '.swiper__pagination',
    clickable: true,
  },

  slidesPerView: 'auto',

  spaceBetween: 16,

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