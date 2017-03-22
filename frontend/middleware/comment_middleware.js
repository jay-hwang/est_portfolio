import {
  CREATE_COMMENT,
  REQUEST_COMMENT,
  REQUEST_COMMENTS,
  DELETE_COMMENT,
  receiveComment,
  receiveComments,
  removeComment,
  receiveCommentErrors
} from '../actions/comment_actions';

import {
  createComment,
  fetchComment,
  fetchComments,
  deleteComment
} from '../util/comment_api_util';

import CommentForm from '../components/comment/comment_form';

const CommentMiddleware = ({ getState, dispatch }) => next => action => {
  const createCommentSuccess = comment => {
    dispatch(receiveComment(comment));
    $('.comment-form :input').val('');
  };
  const commentSuccess = comment => dispatch(receiveComment(comment));
  const commentsSuccess = comments => dispatch(receiveComments(comments));
  const deleteCommentSuccess = id => dispatch(removeComment(id));
  const error = e => dispatch(receiveCommentErrors(e.responseJSON));

  switch(action.type) {
    case CREATE_COMMENT:
      createComment(action.comment, createCommentSuccess, error);
      return next(action);

    case REQUEST_COMMENT:
      fetchComment(action.id, commentSuccess, error);
      return next(action);

    case REQUEST_COMMENTS:
      fetchComments(action.blogId, commentsSuccess, error);
      return next(action);

    case DELETE_COMMENT:
      deleteComment(action.id, deleteCommentSuccess, error);
      return next(action);

    default:
      return next(action);
  }
};

export default CommentMiddleware;
