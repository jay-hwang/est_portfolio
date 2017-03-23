import merge from 'lodash/merge';
import {
  RECEIVE_TAGGING,
  RECEIVE_TAGGINGS,
  REMOVE_TAGGING,
  RECEIVE_TAGGING_ERRORS
} from '../actions/tagging_actions';

const _defaultState = {
  index: {},
  errors: []
};

const TaggingReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_TAGGING:
      newState.index[action.tagging.id] = action.tagging;
      newState.errors = [];
      return newState;

    case RECEIVE_TAGGINGS:
      newState.index = action.taggings;
      newState.errors = [];
      return newState;

    case REMOVE_TAGGING:
      delete newState.index[action.id];
      newState.errors = [];
      return newState;

    case RECEIVE_TAGGING_ERRORS:
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }
};

export default TaggingReducer;
