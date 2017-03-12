import { connect } from 'react-redux';
import BlogForm from './blog_form';
import { createBlog } from '../../../actions/blog_actions';

const mapStateToProps = (state, props) => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  errors: state.blogs.errors,
  isNew: true
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  createBlog: blog => dispatch(createBlog(blog))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BlogForm);
