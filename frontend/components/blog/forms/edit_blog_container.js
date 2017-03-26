import { connect } from 'react-redux';
import BlogForm from './blog_form';
import {
  updateBlog,
  requestBlog,
  requestBlogs
} from '../../../actions/blog_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  blogs: state.blogs.index,
  isNew: false
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  updateBlog: blog => dispatch(updateBlog(blog)),
  requestBlogs: () => dispatch(requestBlogs()),
  requestBlog: id => dispatch(requestBlog(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BlogForm);
