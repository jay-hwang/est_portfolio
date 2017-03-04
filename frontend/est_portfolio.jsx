import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  $(window).scroll(function() {
    let y = $(this).scrollTop();
    if (y > 500) {
      $('.hidden-nav').fadeIn(200);
    } else {
      $('.hidden-nav').fadeOut(200);
    }
  });

  let main = document.getElementById('main');
  ReactDOM.render(<Root />, main);
});
