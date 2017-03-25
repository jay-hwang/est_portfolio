import { connect } from 'react-redux';
import RelatedBlogs from './related_blogs';

const mapStateToProps = state => ({
  blogs: state.blogs.index
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedBlogs);
