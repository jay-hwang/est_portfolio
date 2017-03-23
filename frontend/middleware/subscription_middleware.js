import {
  CREATE_SUBSCRIPTION,
  REQUEST_SUBSCRIPTIONS,
  DELETE_SUBSCRIPTION,
  receiveSubscription,
  receiveSubscriptions,
  removeSubscription,
  receiveSubscriptionErrors
} from '../actions/subscription_actions';

import {
  createSubcription,
  fetchSubscriptions,
  deleteSubscription
} from '../util/subscription_api_util';

const SubscriptionMiddleware = ({ getState, dispatch }) => next => action => {
  const showSuccess = data => dispatch(receiveSubscription(data));
  const indexSuccess = data => dispatch(receiveSubscriptions(data));
  const deleteSuccess = id => dispatch(removeSubscription(id));
  const error = e => dispatch(receiveSubscriptionErrors(e.responseJSON));
  
  switch(action.type) {
    case CREATE_SUBSCRIPTION:
      createSubcription(action.subscription, showSuccess, error);
      return next(action);

    case REQUEST_SUBSCRIPTIONS:
      fetchSubscriptions(indexSuccess, error);
      return next(action);

    case DELETE_SUBSCRIPTION:
      deleteSubscription(action.subscription, deleteSuccess, error);
      return next(action);

    default:
      return next(action);
  }
};

export default SubscriptionMiddleware;
