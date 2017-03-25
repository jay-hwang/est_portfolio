import { connect } from 'react-redux';
import Blog from './blog';
import {
  requestBlog,
  requestBlogs
} from '../../actions/blog_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  blogs: state.blogs.index,
  comments: state.comments.index
});

const mapDispatchToProps = dispatch => ({
  requestBlog: blogId => dispatch(requestBlog(blogId)),
  requestBlogs: tags => dispatch(requestBlogs(tags))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Blog);
