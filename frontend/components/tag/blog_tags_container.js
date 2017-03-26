import { connect } from 'react-redux';
import Tags from './tags';
import { createTagging, deleteTagging } from '../../actions/tagging_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  isBlogTags: true
});

const mapDispatchToProps = dispatch => ({
  createTagging: tagging => dispatch(createTagging(tagging)),
  deleteTagging: id => dispatch(deleteTagging(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Tags);
