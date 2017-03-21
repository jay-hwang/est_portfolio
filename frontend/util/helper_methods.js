import {
  requestBlog,
  requestBlogs
} from '../actions/blog_actions';

export const _redirectUnlessLoggedIn = store => {
  return (nextState, replace) => {
    if (!store.getState().session.currentUser) { replace('/'); }
  };
};

export const _getBlogs = store => {
  return () => {
    store.dispatch(requestBlogs());
  };
};

export const _getUserBlogs = store => {
  return () => {
    // store.getState().session.currentUser.blogs.forEach(blog => {
    //   store.dispatch(requestBlog(blog.id));
    // });
  };
};
