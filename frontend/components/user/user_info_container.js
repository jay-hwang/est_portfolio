import { connect } from 'react-redux';
import UserInfo from './user_info';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, routerProps) => ({

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
