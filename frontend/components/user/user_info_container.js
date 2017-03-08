import { connect } from 'react-redux';
import UserInfo from './user_info';
import { deleteUserAction, logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  deleteUser: userId => dispatch(deleteUserAction(userId)),
  logout: () => dispatch(logout())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
