import { connect } from 'react-redux';
import BlogForm from './blog_form';
import {
  updateBlog,
  requestBlog,
  requestBlogs,
  blogChangeReceived
} from '../../../actions/blog_actions';
import { createTagging, deleteTagging } from '../../../actions/tagging_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  blogs: state.blogs.index,
  messages: state.blogs.messages,
  recentReceived: state.blogs.recentReceived,
  isNew: false
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  updateBlog: blog => dispatch(updateBlog(blog)),
  requestBlogs: () => dispatch(requestBlogs()),
  requestBlog: id => dispatch(requestBlog(id)),
  createTagging: tagging => dispatch(createTagging(tagging)),
  deleteTagging: id => dispatch(deleteTagging(id)),
  blogChangeReceived: () => dispatch(blogChangeReceived())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BlogForm);
