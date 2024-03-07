// Initialize swiper
const slider = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 'auto',
});

/* Ничего умнее не придумал что бы вначале не загружались сразу оба блока */
document.querySelector('.info__swiper').hidden = true;
document.querySelector('.info__expandable').hidden = true;

document.addEventListener('DOMContentLoaded', function () {
  if (768 > window.screen.width) {
    document.querySelector('.info__swiper').classList.remove('hideClass');
    document.querySelector('.info__expandable').classList.remove('hideClass');
    document.querySelector('.info__swiper').hidden = false;
  } else {
    document.querySelector('.info__expandable').classList.remove('hideClass');
    document.querySelector('.info__swiper').classList.remove('hideClass');
    document.querySelector('.info__expandable').hidden = false;
  }
});

window.addEventListener("resize", () => {
  if (768 > window.innerWidth) {
    document.querySelector('.info__swiper').hidden = false;
    document.querySelector('.info__expandable').hidden = true;
  } else {
    document.querySelector('.info__swiper').hidden = true;
    document.querySelector('.info__expandable').hidden = false;
  }
});

