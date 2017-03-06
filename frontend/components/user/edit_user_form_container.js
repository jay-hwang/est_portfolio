import { connect } from 'react-redux';
import EditUserForm from './edit_user_form';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(EditUserForm);
