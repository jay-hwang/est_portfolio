export const LOGIN = 'LOGIN';
export const login = user => ({
  type: LOGIN,
  user
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});

export const SIGNUP = 'SIGNUP';
export const signup = user => ({
  type: SIGNUP,
  user
});

export const REQUEST_USER = 'REQUEST_USER';
export const requestUser = id => ({
  type: REQUEST_USER,
  id
});

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = user => ({
  type: UPDATE_USER,
  user
});

export const DELETE_USER = 'DELETEUSER';
export const deleteUserAction = id => ({
  type: DELETE_USER,
  id
});

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
