import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SplashContainer from './splash/splash_container';
import ProfileContainer from './profile/profile_container';
import NewBlogContainer from './blog/forms/new_blog_container';
import EditBlogContainer from './blog/forms/edit_blog_container';
import BlogsContainer from './blog/blogs_container';
import UserBlogsContainer from './blog/user_blogs_container';
import BlogContainer from './blog/blog_container';
import {
  _redirectUnlessLoggedIn,
  _getBlogs,
  _getUserBlogs
} from '../util/helper_methods';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>

          <IndexRoute component={ SplashContainer }
            onEnter={ _getBlogs(store) }>
          </IndexRoute>

          <Route path='/profile'
            component={ ProfileContainer }
            onEnter={ _redirectUnlessLoggedIn(store) }>
          </Route>

          <Route path='/new-blog'
            component={ NewBlogContainer }
            onEnter={ _redirectUnlessLoggedIn(store) }>
          </Route>

          <Route path='/blogs/edit/:blog_id'
            component={ EditBlogContainer }
            onEnter={ _getBlogs(store) }>
          </Route>

          <Route path='/blogs'
            component={ BlogsContainer }
            onEnter={ _getBlogs(store) }>
          </Route>

          <Route path='/blogs/user'
            component={ UserBlogsContainer }
            onEnter={ _getUserBlogs(store) }>
          </Route>

          <Route path='/blogs/:blog_id'
            component={ BlogContainer }>
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
