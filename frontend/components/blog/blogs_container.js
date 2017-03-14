import { connect } from 'react-redux';
import { requestBlogs } from '../../actions/blog_actions';
import Blogs from './blogs';

const mapStateToProps = state => ({
  blogs: state.blogs.index,
  isUserBlogs: false
});

const mapDispatchToProps = dispatch => ({
  requestBlogs: () => dispatch(requestBlogs())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
