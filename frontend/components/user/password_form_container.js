import { connect } from 'react-redux';
import PasswordForm from './password_form';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  updateUser: user => dispatch(updateUser(user))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PasswordForm);
