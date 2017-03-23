import {
  CREATE_TAGGING,
  REQUEST_TAGGING,
  REQUEST_TAGGINGS,
  DELETE_TAGGING,
  receiveTagging,
  receiveTaggings,
  removeTagging,
  receiveTaggingErrors
} from '../actions/tagging_actions';

import {
  createTagging,
  fetchTagging,
  fetchTaggings,
  deleteTagging
} from '../util/tagging_api_util';

const TaggingMiddleware = ({ getState, dispatch }) => next => action => {
  const taggingSuccess = tagging => dispatch(receiveTagging(tagging));
  const taggingsSuccess = taggings => dispatch(receiveTaggings(taggings));
  const deleteTaggingSuccess = id => dispatch(removeTagging(id));
  const error = e => dispatch(receiveTaggingErrors(e.responseJSON));

  switch(action.type) {
    case CREATE_TAGGING:
      createTagging(action.tagging, taggingSuccess, error);
      return next(action);

    case REQUEST_TAGGING:
      fetchTagging(action.id, taggingSuccess, error);
      return next(action);

    case REQUEST_TAGGINGS:
      fetchTaggings(action.blogId, taggingsSuccess, error);
      return next(action);

    case DELETE_TAGGING:
      deleteTagging(action.id, deleteTaggingSuccess, error);
      return next(action);

    default:
      return next(action);
  }
};

export default TaggingMiddleware;
