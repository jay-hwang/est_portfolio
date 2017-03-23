export const CREATE_TAGGING = 'CREATE_TAGGING';
export const createTagging = tagging => ({
  type: CREATE_TAGGING,
  tagging
});

export const REQUEST_TAGGING = 'REQUEST_TAGGING';
export const requestTagging = id => ({
  type: REQUEST_TAGGING,
  id
});

export const REQUEST_TAGGINGS = 'REQUEST_TAGGINGS';
export const requestTaggings = blogId => ({
  type: REQUEST_TAGGINGS,
  blogId
});

export const DELETE_TAGGING = 'DELETE_TAGGING';
export const deleteTagging = id => ({
  type: DELETE_TAGGING,
  id
});

export const RECEIVE_TAGGING = 'RECEIVE_TAGGING';
export const receiveTagging = tagging => ({
  type: RECEIVE_TAGGING,
  tagging
});

export const RECEIVE_TAGGINGS = 'RECEIVE_TAGGINGS';
export const receiveTaggings = taggings => ({
  type: RECEIVE_TAGGINGS,
  taggings
});

export const REMOVE_TAGGING = 'REMOVE_TAGGING';
export const removeTagging = id => ({
  type: REMOVE_TAGGING,
  id
});

export const RECEIVE_TAGGING_ERRORS = 'RECEIVE_TAGGING_ERRORS';
export const receiveTaggingErrors = errors => ({
  type: RECEIVE_TAGGING_ERRORS,
  errors
});
