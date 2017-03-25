export const CREATE_BLOG = 'CREATE_BLOG';
export const createBlog = blog => ({
  type: CREATE_BLOG,
  blog
});

export const REQUEST_BLOG = 'REQUEST_BLOG';
export const requestBlog = id => ({
  type: REQUEST_BLOG,
  id
});

export const REQUEST_BLOGS = 'REQUEST_BLOGS';
export const requestBlogs = tags => ({
  type: REQUEST_BLOGS,
  tags
});

export const UPDATE_BLOG = 'UPDATE_BLOG';
export const updateBlog = (blog, router) => ({
  type: UPDATE_BLOG,
  blog,
  router
});

export const DELETE_BLOG = 'DELETE_BLOG';
export const deleteBlog = id => ({
  type: DELETE_BLOG,
  id
});

export const REMOVE_BLOG = 'REMOVE_BLOG';
export const removeBlog = id => ({
  type: REMOVE_BLOG,
  id
});

export const RECEIVE_BLOG = 'RECEIVE_BLOG';
export const receiveBlog = blog => ({
  type: RECEIVE_BLOG,
  blog
});

export const RECEIVE_BLOGS = 'RECEIVE_BLOGS';
export const receiveBlogs = blogs => ({
  type: RECEIVE_BLOGS,
  blogs
});

export const RECEIVE_BLOG_ERRORS = 'RECEIVE_BLOG_ERRORS';
export const receiveBlogErrors = (errors) => ({
  type: RECEIVE_BLOG_ERRORS,
  errors
});
