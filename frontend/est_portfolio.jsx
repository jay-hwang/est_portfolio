import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// user/session test imports
import {
  login,
  logout,
  signup,
  updateUser,
  deleteUserAction
} from './actions/session_actions';

import {
  createBlog,
  requestBlog,
  requestBlogs,
  updateBlog,
  deleteBlog
} from './actions/blog_actions';

import {
  createComment,
  requestComment,
  requestComments,
  deleteComment
} from './actions/comment_actions';

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
      $('.hidden-nav').fadeIn(300);
    } else {
      $('.hidden-nav').fadeOut(300);
    }
  });

  window.store = store;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.updateUser = updateUser;
  window.deleteUser = deleteUserAction;

  window.createBlog = createBlog;
  window.requestBlog = requestBlog;
  window.requestBlogs = requestBlogs;
  window.updateBlog = updateBlog;
  window.deleteBlog = deleteBlog;

  window.createComment = createComment;
  window.requestComment = requestComment;
  window.requestComments = requestComments;
  window.deleteComment = deleteComment;

  ReactDOM.render(<Root store={store} />, main);
});


// comment = {
//   body: 'hello i am a comment body about random things',
//   blog_id: 1,
//   author_name: 'Jay',
//   author_email: 'jay@gmail.com',
//   author_id: 2
// }
