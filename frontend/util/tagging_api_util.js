export const createTagging = (tagging, success, error) => {
  $.ajax ({
    method: 'POST',
    url: 'api/taggings',
    data: { tagging },
    success,
    error
  });
};

export const fetchTagging = (id, success, error) => {
  $.ajax ({
    method: 'GET',
    url: `api/taggings/${id}`,
    success,
    error
  });
};

export const fetchTaggings = (blogId, success, error) => {
  $.ajax ({
    method: 'GET',
    url: 'api/taggings',
    data: { blogId },
    success,
    error
  });
};

export const deleteTagging = (id, success, error) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/taggings/${id}`,
    success,
    error
  });
};
