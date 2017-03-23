export const CREATE_TAG = 'CREATE_TAG';
export const createTag = tag => ({
  type: CREATE_TAG,
  tag
});

export const REQUEST_TAG = 'REQUEST_TAG';
export const requestTag = id => ({
  type: REQUEST_TAG,
  id
});

export const REQUEST_TAGS = 'REQUEST_TAGS';
export const requestTags = () => ({
  type: REQUEST_TAGS
});

export const UPDATE_TAG = 'UPDATE_TAG';
export const updateTag = tag => ({
  type: UPDATE_TAG,
  tag
});

export const DELETE_TAG = 'DELETE_TAG';
export const deleteTag = id => ({
  type: DELETE_TAG,
  id
});

export const RECEIVE_TAG = 'RECEIVE_TAG';
export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const REMOVE_TAG = 'REMOVE_TAG';
export const removeTag = id => ({
  type: REMOVE_TAG,
  id
});

export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS';
export const receiveTagErrors = errors => ({
  type: RECEIVE_TAG_ERRORS,
  errors
});
