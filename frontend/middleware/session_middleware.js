import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  receiveCurrentUser,
  receiveErrors
} from '../actions/session_actions';

import {
  login,
  logout,
  signup
} from '../util/session_api_util';

const SessionMiddleware = store => next => action => {
  const loginSuccessCB = user => {
    store.dispatch(receiveCurrentUser(user));
  };

  const errorCB = errors => {
    store.dispatch(receiveErrors(errors.responseJSON));
  };

  switch(action.type) {
    case LOGIN:
      login(action.user, loginSuccessCB, errorCB);
      return next(action);

    case LOGOUT:
      logout();
      return next(action);

    case SIGNUP:
      signup(action.user, loginSuccessCB, errorCB);
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
