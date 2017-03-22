import {
  CREATE_COMMENT,
  REQUEST_COMMENT,
  DELETE_COMMENT,
  receiveComment,
  removeComment,
  receiveCommentErrors
} from '../actions/comment_actions';

import {
  createComment,
  fetchComment,
  deleteComment
} from '../util/comment_api_util';

const CommentMiddleware = ({ getState, dispatch }) => next => action => {
  const commentSuccess = comment => dispatch(receiveComment(comment));
  const deleteCommentSuccess = id => dispatch(removeComment(id));
  const error = e => dispatch(receiveCommentErrors(e.responseJSON));

  switch(action.type) {
    case CREATE_COMMENT:
      createComment(action.comment, commentSuccess, error);
      return next(action);

    case REQUEST_COMMENT:
      fetchComment(action.id, commentSuccess, error);
      return next(action);

    case DELETE_COMMENT:
      deleteComment(action.id, deleteCommentSuccess, error);
      return next(action);

    default:
      return next(action);
  }
};

export default CommentMiddleware;
