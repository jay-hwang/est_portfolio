import { connect } from 'react-redux';
import Taggings from './taggings';
import { requestTaggings } from '../../actions/tagging_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  taggings: state.taggings.index
});

const mapDispatchToProps = dispatch => ({
  requestTaggings: blogId => dispatch(requestTaggings(blogId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Taggings);
