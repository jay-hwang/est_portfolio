export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const REQUEST_COMMENT = 'REQUEST_COMMENT';
export const requestComment = id => ({
  type: REQUEST_COMMENT,
  id
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const removeComment = id => ({
  type: REMOVE_COMMENT,
  id
});

export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});
