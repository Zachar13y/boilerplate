'use strict';

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {

    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {

        link.style.animation = `navLinkFade 1.3s ease forwards ${index / 7 + 0.3}s`;
      }

    });
    burger.classList.toggle('toggle');
  });

};

navSlide();

const cycleImages = () => {
  const index = 0;
  const wallImage = document.querySelector('.background-img');

  setInterval(function () {
    index = index + 1 < wallImage.length ? index + 1 : 0;
    wallImage.eq(index).addClass('show');
    wallImage.eq(index - 1).removeClass('show');
  }, 2000);
};

cycleImages();

