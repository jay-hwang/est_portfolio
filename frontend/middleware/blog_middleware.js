import {
  CREATE_BLOG,
  REQUEST_BLOG,
  REQUEST_BLOGS,
  UPDATE_BLOG,
  DELETE_BLOG,
  receiveBlog,
  receiveBlogs,
  removeBlog,
  receiveBlogErrors
} from '../actions/blog_actions';

import {
  createBlog,
  fetchBlog,
  fetchBlogs,
  updateBlog,
  deleteBlog
} from '../util/blog_api_util';

const BlogMiddleware = ({ getState, dispatch }) => next => action => {
  const deleteBlogSuccess = id => dispatch(removeBlog(id));
  const error             = e => dispatch(receiveBlogErrors(e.responseJSON));
  const blogSuccess       = blog => dispatch(receiveBlog(blog));
  const blogsSuccess      = blogs => dispatch(receiveBlogs(blogs));
  const updateBlogSuccess = blog => {
    dispatch(receiveBlog(blog));
  };

  switch(action.type) {
    case CREATE_BLOG:
      createBlog(action.blog, blogSuccess, error);
      return next(action);

    case REQUEST_BLOG:
      fetchBlog(action.id, blogSuccess, error);
      return next(action);

    case REQUEST_BLOGS:
      fetchBlogs(action.tags, blogsSuccess, error);
      return next(action);

    case UPDATE_BLOG:
      updateBlog(action.blog, updateBlogSuccess, error);
      return next(action);

    case DELETE_BLOG:
      deleteBlog(action.id, deleteBlogSuccess, error);
      return next(action);

    default:
      return next(action);
  }
};

export default BlogMiddleware;
