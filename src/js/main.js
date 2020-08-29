import './slider';
import WOW from '../../node_modules/wow.js/dist/wow';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  let modalState = {};
  let deadline = '2020-09-15';

  modals();
  tabs('.glazing__slider', '.glazing__block', '.glazing__content', 'active', 'flex');
  tabs('.decoration__slider', '.no_click', '.decoration__content > div ', 'after_click');
  tabs('.balcon-icons', '.balcon-icons__img', '.big-img > img', 'do-image-more', 'inline-block'); // tabs окон
  forms(modalState);

  changeModalState(modalState);
  timer('.timer__container', deadline);
  images();

  document.querySelector('.footer__logo').addEventListener('click', (e) => {
    if (e.target.matches('.footer__logo') || e.target.parentNode.matches('.footer__logo')) {
      document.querySelector('.header').scrollIntoView({
        behavior: 'smooth'
      });
    }
  });

  let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true,
    live: true
  });
  wow.init();
});