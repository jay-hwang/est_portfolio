export const createTag = (tag, success, error) => {
  $.ajax ({
    method: 'POST',
    url: 'api/tags',
    data: { tag },
    success,
    error
  });
};

export const fetchTag = (id, success, error) => {
  $.ajax ({
    method: 'GET',
    url: `api/tags/${id}`,
    success,
    error
  });
};

export const fetchTags = (success, error) => {
  $.ajax ({
    method: 'GET',
    url: 'api/tags',
    success,
    error
  });
};

export const updateTag = (tag, success, error) => {
  $.ajax ({
    method: 'PATCH',
    url: `api/tags/${tag.id}`,
    data: { tag },
    success,
    error
  });
};

export const deleteTag = (id, success, error) => {
  $.ajax ({
  method: 'DELETE',
  url: `api/tags/${id}`,
  success,
  error
});
};
