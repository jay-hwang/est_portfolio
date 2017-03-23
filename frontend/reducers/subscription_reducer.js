import merge from 'lodash/merge';
import {
  RECEIVE_SUBSCRIPTION,
  RECEIVE_SUBSCRIPTIONS,
  REMOVE_SUBSCRIPTION,
  RECEIVE_SUBSCRIPTION_ERRORS
} from '../actions/subscription_actions';

const _defaultState = {
  index: {},
  errors: []
};

const SubscriptionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_SUBSCRIPTION:
      newState.index[action.subscription.id] = action.subscription;
      newState.errors = [];
      return newState;

    case RECEIVE_SUBSCRIPTIONS:
      newState.index = action.subscriptions;
      newState.errors = [];
      return newState;

    case REMOVE_SUBSCRIPTION:
      delete newState.index[action.id];
      newState.errors = [];
      return newState;

    case RECEIVE_SUBSCRIPTION_ERRORS:
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }
};

export default SubscriptionReducer;
