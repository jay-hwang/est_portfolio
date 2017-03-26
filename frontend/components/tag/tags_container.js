import { connect } from 'react-redux';
import Tags from './tags';
import {
  createTag,
  requestTags,
  deleteTag
} from '../../actions/tag_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  tags: state.tags.index
});

const mapDispatchToProps = dispatch => ({
  createTag: tag => dispatch(createTag(tag)),
  requestTags: () => dispatch(requestTags()),
  deleteTag: id => dispatch(deleteTag(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
