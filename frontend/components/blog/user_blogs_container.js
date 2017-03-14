import { connect } from 'react-redux';
import { requestBlogs } from '../../actions/blog_actions';
import Blogs from './blogs';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  blogs: state.session.currentUser.blogs,
  isUserBlogs: true
});

const mapDispatchToProps = dispatch => ({
  requestBlogs: () => dispatch(requestBlogs())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
