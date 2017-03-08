export const createBlog = (blog, success, error) => {
  $.ajax ({
    method: 'POST',
    url: 'api/blogs',
    data: { blog },
    success,
    error
  });
};

export const updateBlog = (blog, success, error) => {
  $.ajax ({
    method: 'PATCH',
    url: `api/blogs/${blog.id}`,
    data: { blog },
    success,
    error
  });
};

export const deleteSpot = (blogId, success, error) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/blogs/${blogId}`,
    success,
    error
  });
};

export const fetchBlog = (blogId, success, error) => {
  $.ajax ({
    method: 'GET',
    url: `api/blogs/${blogId}`,
    success,
    error
  });
};

// fetch all blogs will eventually receive a 'tags' params as data: tags
export const fetchBlogs = (success, error) => {
  $.ajax ({
    method: 'GET',
    url: 'api/blogs',
    success,
    error
  });
};
