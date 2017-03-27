import React from 'react';
import {
  requestBlog,
  requestBlogs
} from '../actions/blog_actions';
import { requestUser } from '../actions/session_actions';

export const _redirectUnlessLoggedIn = store => {
  return (nextState, replace) => {
    if (!store.getState().session.currentUser) { replace('/'); }
  };
};

export const _getBlogs = store => {
  return () => store.dispatch(requestBlogs());
};

export const _mapErrorsToHTML = errors => (
  errors.map((e, i) => (
    <li key={i} className='error'>{ e }</li>
  ))
);

export const _getCurrentUser = store => {
  return () => { 
    let id = store.getState().session.currentUser.id;
    store.dispatch(requestUser(id));
  };
};
