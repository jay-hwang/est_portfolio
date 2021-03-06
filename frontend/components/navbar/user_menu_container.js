import { connect } from 'react-redux';
import UserMenu from './user_menu';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, props) => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  hideMenu: props.hideMenu
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  logout: () => dispatch(logout())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);
