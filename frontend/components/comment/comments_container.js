import { connect } from 'react-redux';
import Comments from './comments';
import {
  requestComment,
  requestComments,
  deleteComment
} from '../../actions/comment_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  comments: state.comments.index
});

const mapDispatchToProps = dispatch => ({
  requestComment: id => dispatch(requestComment(id)),
  requestComments: blogId => dispatch(requestComments(blogId)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Comments);
