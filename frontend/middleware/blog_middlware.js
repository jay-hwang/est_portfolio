import {
  CREATE_BLOG,
  REQUEST_BLOG,
  REQUEST_BLOGS,
  UPDATE_BLOG,
  DELETE_BLOG,
  requestBlogs,
  requestBlog,
  removeBlog,
  receiveBlog,
  receiveBlogs,
  receiveBlogErrors
} from '../actions/blog_actions';

import {
  createBlog,
  fetchBlog,
  fetchBlogs,
  updateBlog,
  deletBlog
} from '../util/spot_api_util';

const BlogMiddleware = ({ getState, dispatch }) => next => action => {
  const blogSuccess       = blog   => { dispatch(receiveBlog(blog));   };
  const blogsSuccess      = blogs  => { dispatch(receiveBlogs(blogs)); };
  const deleteBlogSuccess = blogId => { dispatch(removeBlog(blogId));  };
  const error = e => { dispatch(receiveBlogErrors(e.responseJSON));    };

  switch(action.type) {
    case CREATE_BLOG:
      createBlog(action.blog, blogSuccess, error);
      return next(action);

    case REQUEST_BLOG:
      fetchBlog(action.blogId, blogSuccess, error);
      return next(action);

    case REQUEST_BLOGS:
      fetchBlogs(blogsSuccess, error);
      return next(action);

    case UPDATE_BLOG:
      updateBlog(action.blog, blogSuccess, error);
      return next(action);

    case DELETE_BLOG:
      removeBlog(action.blogId, blogSuccess, error);
      return next(action);

    default:
      return next(action);
  }
};

export default BlogMiddleware;
