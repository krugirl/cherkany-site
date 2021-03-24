import '../scss/cafe/cafe.scss';

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
  }
  if (window.pageYOffset < 100 && second) {
    second = false;
    once = true;
    header.style.backgroundColor = 'inherit';
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

menuBtn.addEventListener('click', (event) => {
  btn.forEach(elem => elem.classList.remove('active'))
  
  event.target.classList.toggle('active')
  
});

const catBtn = document.querySelector('.choose');
const cat = document.querySelectorAll('.choose_cat');

catBtn.addEventListener('click', (event) => {
  cat.forEach(elem => elem.classList.remove('active'))
  
  event.target.classList.toggle('active')
  
});