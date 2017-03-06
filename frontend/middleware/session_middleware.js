import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  UPDATE_USER,
  DELETE_USER,
  deleteUserAction,
  receiveCurrentUser,
  receiveErrors
} from '../actions/session_actions';

import {
  login,
  logout,
  signup,
  updateUser,
  deleteUser
} from '../util/session_api_util';

const SessionMiddleware = store => next => action => {
  const successCB = user => {
    store.dispatch(receiveCurrentUser(user));
  };

  const deleteUserSuccessCB = user => {
    store.dispatch(deleteUserAction(user));
  };

  const errorCB = errors => {
    store.dispatch(receiveErrors(errors.responseJSON));
  };

  switch(action.type) {
    case LOGIN:
      login(action.user, successCB, errorCB);
      return next(action);

    case LOGOUT:
      logout();
      return next(action);

    case SIGNUP:
      signup(action.user, successCB, errorCB);
      return next(action);

    case UPDATE_USER:
      updateUser(action.user, successCB, errorCB);
      return next(action);

    case DELETE_USER:
      deleteUser(action.id, deleteUserSuccessCB, errorCB);
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
