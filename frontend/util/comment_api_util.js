export const createComment = (comment, success, error) => {
  $.ajax ({
    method: 'POST',
    url: 'api/comments',
    data: { comment },
    success,
    error
  });
};

export const fetchComment = (id, success, error) => {
  $.ajax ({
    method: 'GET',
    url: `api/comments/${id}`,
    success,
    error
  });
};

export const fetchComments = (blogId, success, error) => {
  $.ajax ({
    method: 'GET',
    url: 'api/comments',
    data: { blogId },
    success,
    error
  });
};

export const deleteComment = (id, success, error) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/comments/${id}`,
    success,
    error
  });
};
