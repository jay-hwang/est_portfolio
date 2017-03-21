import { connect } from 'react-redux';
import { requestBlog } from '../../actions/blog_actions';
import Blog from './blog';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  blogs: state.blogs.index
});

const mapDispatchToProps = dispatch => ({
  requestBlog: blogId => dispatch(requestBlog(blogId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Blog);
