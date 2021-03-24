import '../scss/search/search.scss';

import 'bootstrap';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');

let once = true;
let second = true;
document.addEventListener('scroll', () => {
  if (window.pageYOffset > 110 && once) {
    once = false;
    second = true;
    header.style.backgroundColor = 'white';
    header.classList.add('shadow');
  }
  if (window.pageYOffset < 100 && second) {
    second = false;
    once = true;
    header.style.backgroundColor = 'inherit';
    header.classList.remove('shadow');

  }
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

headerBurger.addEventListener('click', (event) => {
  headerBurger.classList.toggle('active');
  headerNav.classList.toggle('active');
});

const menuBtn = document.querySelector('.category__menu');
const btn = document.querySelectorAll('.category__button');
const titleSub = document.querySelector('.main__sidebar__title');


menuBtn.addEventListener('click', (event) => {
  btn.forEach((elem) => elem.classList.remove('active'));
  titleSub.innerText = event.target.innerText;

  event.target.classList.toggle('active');
});
