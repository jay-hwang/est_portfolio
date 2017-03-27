import merge from 'lodash/merge';
import {
  RECEIVE_BLOG,
  RECEIVE_BLOGS,
  RECEIVE_BLOG_CHANGE,
  BLOG_CHANGE_RECEIVED,
  RECEIVE_BLOG_ERRORS,
  REMOVE_BLOG
} from '../actions/blog_actions';

const _defaultState = {
  index: {},
  errors: [],
  messages: {},
  recentReceived: {}
};

const BlogReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_BLOGS:
      newState.index = action.blogs;
      newState.errors = [];
      return newState;

    case RECEIVE_BLOG:
      newState.index[action.blog.id] = action.blog;
      newState.errors = [];
      return newState;

    case RECEIVE_BLOG_CHANGE:
      newState.index[action.blog.id] = action.blog;
      newState.recentReceived = action.blog;
      newState.messages = { success: true };
      newState.errors = [];
      return newState;

    case BLOG_CHANGE_RECEIVED:
      newState.messages = { success: false };
      return newState;

    case RECEIVE_BLOG_ERRORS:
      newState.errors = action.errors;
      newState.messages = { success: false };
      return newState;

    case REMOVE_BLOG:
      delete newState.index[action.id];
      newState.errors = [];
      return newState;

    default:
      return oldState;
  }
};

export default BlogReducer;
