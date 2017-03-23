import {
  CREATE_TAG,
  REQUEST_TAG,
  REQUEST_TAGS,
  UPDATE_TAG,
  DELETE_TAG,
  receiveTag,
  receiveTags,
  removeTag,
  receiveTagErrors
} from '../actions/tag_actions';

import {
  createTag,
  fetchTag,
  fetchTags,
  updateTag,
  deleteTag
} from '../util/tag_api_util';

const TagMiddleware = ({ getState, dispatch }) => next => action => {
  const tagSuccess = tag => dispatch(receiveTag(tag));
  const tagsSuccess = tags => dispatch(receiveTags(tags));
  const deleteTagSuccess = id => dispatch(removeTag(id));
  const error = e => dispatch(receiveTagErrors(e.responseJSON));

  switch(action.type) {
    case CREATE_TAG:
      createTag(action.tag, tagSuccess, error);
      return next(action);

    case REQUEST_TAG:
      fetchTag(action.id, tagSuccess, error);
      return next(action);

    case REQUEST_TAGS:
      fetchTags(tagsSuccess, error);
      return next(action);

    case UPDATE_TAG:
      updateTag(action.tag, tagSuccess, error);
      return next(action);

    case DELETE_TAG:
      deleteTag(action.id, deleteTagSuccess, error);
      return next(action);

    default:
      return next(action);
  }
};

export default TagMiddleware;
