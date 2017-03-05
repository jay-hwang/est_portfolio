import { connect } from 'react-redux';
import NavbarMenu from './navbar_menu';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, routerProps) => ({

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(NavbarMenu);
