import { connect } from 'react-redux';
import BlogForm from './blog_form';
import { updateBlog } from '../../../actions/blog_actions';

const mapStateToProps = (state, props) => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  blog: props.blog,
  isNew: false,
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  updateBlog: blog => dispatch(updateBlog(blog))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BlogForm);
