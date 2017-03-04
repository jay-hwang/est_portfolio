import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors || []
});

const mapDispatchToProps = (dispatch, routerProps) => {
  const processForm = (user, propsLoginForm) => {
    if (propsLoginForm === true) {
      return login(user);
    } else {
      return signup(user);
    }
  };

  return {
    login: user => dispatch(login(user))
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
