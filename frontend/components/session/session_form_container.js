import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, props) => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors || [],
  hideMenu: props.hideMenu
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  login: user => dispatch(login(user))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
