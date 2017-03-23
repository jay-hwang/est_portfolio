import { connect } from 'react-redux';
import Tags from './tags';

import {
  requestTags,
  deleteTag
} from '../../actions/tag_actions';

import {
  createTagging,
  requestTaggings
} from '../../actions/tagging_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  tags: state.tags.index
});

const mapDispatchToProps = dispatch => ({
  requestTags: () => dispatch(requestTags()),
  deleteTag: id => dispatch(deleteTag()),
  createTagging: tagging => dispatch(createTagging(tagging)),
  requestTaggings: () => dispatch(requestTaggings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
