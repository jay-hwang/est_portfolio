import { connect } from 'react-redux';
import BlogLink from './blog_link';
import {
  updateBlog,
  removeBlog
} from '../../actions/blog_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateBlog: blog => dispatch(updateBlog(blog)),
  removeBlog: blogId => dispatch(removeBlog(blogId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BlogLink);
