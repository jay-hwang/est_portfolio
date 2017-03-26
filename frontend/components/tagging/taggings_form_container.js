import { connect } from 'react-redux';
import TaggingForms from './taggings_form';
import { requestTags } from '../../actions/tag_actions';
import { requestBlog } from '../../actions/blog_actions';
import {
  createTagging,
  requestTaggings,
  deleteTagging
} from '../../actions/tagging_actions';

const mapStateToProps = state => ({
  blogs: state.blogs.index,
  taggings: state.taggings.index,
  tags: state.tags.index
});

const mapDispatchToProps = dispatch => ({
  createTagging: tagging => dispatch(createTagging(tagging)),
  requestTags: () => dispatch(requestTags()),
  requestTaggings: blogId => dispatch(requestTaggings(blogId)),
  deleteTagging: id => dispatch(deleteTagging(id)),
  requestBlog: id => dispatch(requestBlog(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TaggingForms);
