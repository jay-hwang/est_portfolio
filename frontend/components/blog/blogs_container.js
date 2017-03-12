import { connect } from 'react-redux';
import Blogs from './blogs';

const mapStateToProps = state => ({
  blogs: state.blogs.index,
  isUserBlogs: false
});

const mapDispatchToProps = () => ({

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
