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

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const userSuccess = user => dispatch(receiveCurrentUser(user));
  const deleteUserSuccess = user => dispatch(deleteUserAction(user));
  const error = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type) {
    case LOGIN:
      login(action.user, userSuccess, error);
      return next(action);

    case LOGOUT:
      logout();
      return next(action);

    case SIGNUP:
      signup(action.user, userSuccess, error);
      return next(action);

    case UPDATE_USER:
      updateUser(action.user, userSuccess, error);
      return next(action);

    case DELETE_USER:
      deleteUser(action.id, deleteUserSuccess, error);
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
