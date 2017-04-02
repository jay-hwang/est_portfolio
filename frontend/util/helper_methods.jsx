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

const MONTHS = {
  '01': 'JAN',
  '02': 'FEB',
  '03': 'MAR',
  '04': 'APR',
  '05': 'MAY',
  '06': 'JUN',
  '07': 'JUL',
  '08': 'AUG',
  '09': 'SEP',
  '10': 'OCT',
  '11': 'NOV',
  '12': 'DEC'
};

export const _parseTime = time => {
  let date = time.split('T')[0].split('-');
  let year  = date[0],
      month = MONTHS[date[1]],
      day   = date[2];
  return `${day}, ${month} ${year}`;
};
