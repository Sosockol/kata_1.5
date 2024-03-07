// Initialize swiper
const slider = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 'auto',
});

window.addEventListener("resize", () => {
  if (768 <= window.innerWidth) {
    document.querySelector('.info__swiper').hidden = true;
    document.querySelector('.info__expandable').hidden = false;
  } else {
    document.querySelector('.info__swiper').hidden = false;
    document.querySelector('.info__expandable').hidden = true;
  }
});

