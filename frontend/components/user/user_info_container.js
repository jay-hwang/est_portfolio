import { connect } from 'react-redux';
import UserInfo from './user_info';
import { deleteUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  deleteUser: userId => dispatch(deleteUser(userId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
