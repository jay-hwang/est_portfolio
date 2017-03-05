import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// user/session test imports
import {
  login,
  logout,
  signup
} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // Toggles hidden nav
  $(window).scroll(function() {
    let y = $(this).scrollTop();
    if (y > 500) {
      $('.hidden-nav').fadeIn(200);
    } else {
      $('.hidden-nav').fadeOut(200);
    }
  });

  window.store = store;
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  ReactDOM.render(<Root store={store} />, main);
});
