import merge from 'lodash/merge';
import {
  RECEIVE_TAG,
  RECEIVE_TAGS,
  REMOVE_TAG,
  RECEIVE_TAG_ERRORS
} from '../actions/tag_actions';

const _defaultState = {
  index: {},
  errors: []
};

const TagReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_TAG:
      newState.index[action.tag.id] = action.tag;
      newState.errors = [];
      return newState;

    case RECEIVE_TAGS:
      newState.index = action.tags;
      newState.errors = [];
      return newState;

    case REMOVE_TAG:
      delete newState.index[action.id];
      newState.errors = [];
      return newState;

    case RECEIVE_TAG_ERRORS:
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }
};

export default TagReducer;
