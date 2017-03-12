import { connect } from 'react-redux';
import Blogs from './blogs';
import {
  updateBlog,
  removeBlog
} from '../../actions/blog_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  blogs: state.session.currentUser.blogs,
  isUserBlogs: true
});

const mapDispatchToProps = (dispatch) => ({
  updateBlog: blog => dispatch(updateBlog(blog)),
  removeBlog: blogId => dispatch(removeBlog(blogId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
