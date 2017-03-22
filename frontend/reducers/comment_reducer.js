import merge from 'lodash/merge';
import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT,
  RECEIVE_COMMENT_ERRORS
} from '../actions/comment_actions';

const _defaultState = {
  index: {},
  errors: []
};

const CommentReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_COMMENT:
      newState.index[action.comment.id] = action.comment;
      newState.errors = [];
      return newState;

    case RECEIVE_COMMENTS:
      newState.index = action.comments;
      newState.errors = [];
      return newState;

    case REMOVE_COMMENT:
      delete newState.index[action.id];
      newState.errors = [];
      return newState;

    case RECEIVE_COMMENT_ERRORS:
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }
};

export default CommentReducer;
