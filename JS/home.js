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

