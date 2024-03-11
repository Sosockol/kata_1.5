const slider = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 'auto',
});

const swiper = document.querySelector('.info__swiper');
const expandable = document.querySelector('.info__expandable');
const hideClass = 'hideClass'
swiper.hidden = true;
expandable.hidden = true;

document.addEventListener('DOMContentLoaded', function () {
  if (768 > window.screen.width) {
    swiper.classList.remove(hideClass);
    expandable.classList.remove(hideClass);
    swiper.hidden = false;
  } else {
    expandable.classList.remove(hideClass);
    swiper.classList.remove(hideClass);
    expandable.hidden = false;
  }
});

window.addEventListener('resize', () => {
  if (768 > window.innerWidth) {
    swiper.hidden = false;
    expandable.hidden = true;
  } else {
    swiper.hidden = true;
    expandable.hidden = false;
  }
});

const expandButton = expandable.querySelector('.expandable__button');
const expandList = expandable.firstElementChild;
const buttonParagraph = expandButton.lastElementChild;

const expandArrow = expandButton.firstElementChild;


expandButton.addEventListener('click', () => {
  let buttonText = buttonParagraph.textContent;
  if (buttonText == 'Показать все') {
    buttonParagraph.textContent = 'Свернуть';
    expandArrow.style.transform = 'rotate(180deg)';
    expandList.style.height = 'auto';
  } else {
    buttonParagraph.textContent = 'Показать все';
    expandArrow.style.transform = 'rotate(0deg)';
    expandList.style.height = '160px';
  }
});