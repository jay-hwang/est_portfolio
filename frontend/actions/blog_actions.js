export const CREATE_BLOG = 'CREATE_BLOG';
export const createBlog = blog => ({
  type: CREATE_BLOG,
  blog
});

export const UPDATE_BLOG = 'UPDATE_BLOG';
export const updateBlog = blog => ({
  type: UPDATE_BLOG,
  blog
});

export const REMOVE_BLOG = 'REMOVE_BLOG';
export const removeBlog = blogId => ({
  type: REMOVE_BLOG,
  blogId
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

export const REQUEST_BLOG = 'REQUEST_BLOG';
export const requestBlog = blogId => ({
  type: REQUEST_BLOG,
  blogId
});

export const REQUEST_BLOGS = 'REQUEST_BLOGS';
export const requestBlogs = () => ({
  type: REQUEST_BLOGS
});

export const RECEIVE_BLOG_ERRORS = 'RECEIVE_BLOG_ERRORS';
export const receiveBlogErrors = (errors) => ({
  type: RECEIVE_BLOG_ERRORS,
  errors
});
