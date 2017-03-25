import { connect } from 'react-redux';
import BlogFilter from './blog_filter';
import { requestBlogs } from '../../actions/blog_actions';

const mapStateToProps = state => ({
  blogs: state.blogs.index
});

const mapDispatchToProps = dispatch => ({
  requestBlogs: tags => dispatch(requestBlogs(tags))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BlogFilter);
