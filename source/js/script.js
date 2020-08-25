'use strict';

// отображает меню-гамбургер

(function () {
  var pageHeader = document.querySelector('.header__menu');
  var headerToggle = document.querySelector('.header__toggle');

  pageHeader.classList.remove('header__menu--nojs');

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('header__menu--closed')) {
      pageHeader.classList.remove('header__menu--closed');
      pageHeader.classList.add('header__menu--opened');
    } else {
      pageHeader.classList.add('header__menu--closed');
      pageHeader.classList.remove('header__menu--opened');
    }
  });
})();
