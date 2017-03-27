import { connect } from 'react-redux';
import BlogLink from './blog_link';
import { requestUser } from '../../../actions/session_actions';
import {
  updateBlog,
  deleteBlog
} from '../../../actions/blog_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  blogs: state.blogs.index
});

const mapDispatchToProps = dispatch => ({
  updateBlog: blog => dispatch(updateBlog(blog)),
  deleteBlog: blogId => dispatch(deleteBlog(blogId)),
  requestUser: id => dispatch(requestUser(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BlogLink);
