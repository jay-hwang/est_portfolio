import { connect } from 'react-redux';
import Comment from './comment';
import { deleteComment } from '../../actions/comment_actions';
import { requestBlog } from '../../actions/blog_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(deleteComment(id)),
  requestBlog: id => dispatch(requestBlog(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Comment);
