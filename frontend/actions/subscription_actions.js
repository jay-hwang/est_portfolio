export const CREATE_SUBSCRIPTION = 'CREATE_SUBSCRIPTION';
export const createSubcription = subscription => ({
  type: CREATE_SUBSCRIPTION,
  subscription
});

export const REQUEST_SUBSCRIPTIONS = 'REQUEST_SUBSCRIPTIONS';
export const requestSubscriptions = () => ({
  type: REQUEST_SUBSCRIPTIONS
});

export const DELETE_SUBSCRIPTION = 'DELETE_SUBSCRIPTION';
export const deleteSubscription = id => ({
  type: DELETE_SUBSCRIPTION,
  id
});

export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';
export const receiveSubscription = subscription => ({
  type: RECEIVE_SUBSCRIPTION,
  subscription
});

export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const receiveSubscriptions = subscriptions => ({
  type: RECEIVE_SUBSCRIPTIONS,
  subscriptions
});

export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';
export const removeSubscription = subscription => ({
  type: REMOVE_SUBSCRIPTION,
  subscription
});

export const RECEIVE_SUBSCRIPTION_ERRORS = 'RECEIVE_SUBSCRIPTION_ERRORS';
export const receiveSubscriptionErrors = errors => ({
  type: RECEIVE_SUBSCRIPTION_ERRORS,
  errors
});
