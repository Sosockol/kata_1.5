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
    document.querySelector('.swipable').hidden = true;
  } else {
    document.querySelector('.swipable').hidden = false;
  }
});

