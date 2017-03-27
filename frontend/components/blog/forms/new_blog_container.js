import { connect } from 'react-redux';
import BlogForm from './blog_form';
import { createBlog, blogChangeReceived } from '../../../actions/blog_actions';
import { createTagging, deleteTagging } from '../../../actions/tagging_actions';

const mapStateToProps = (state, props) => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  errors: state.blogs.errors,
  messages: state.blogs.messages,
  recentReceived: state.blogs.recentReceived,
  isNew: true
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  createBlog: blog => dispatch(createBlog(blog)),
  createTagging: tagging => dispatch(createTagging(tagging)),
  deleteTagging: id => dispatch(deleteTagging(id)),
  blogChangeReceived: () => dispatch(blogChangeReceived())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BlogForm);
