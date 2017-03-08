import React from 'react';
import { withRouter } from 'react-router';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.profileClick = this.profileClick.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn && !window.currentUser) {
      this.props.router.push('/profile');
    }
  }

  hideMenu() {
    $('.menu-background').fadeOut(200);
    $('.menu').animate({ right: '-=350' }, 200);
    $('.session').slideUp();
    $('.loginli').fadeIn(350);
  }

  handleLogout() {
    this.props.logout();
    this.props.router.push('/');
    this.hideMenu();
  }

  profileClick() {
    if (this.props.loggedIn) {
      this.props.router.push('/profile');
      this.hideMenu();
    }
  }

  render() {
    return (
      <div className='user-menu'>
        <li className='menu-li'>NEW BLOG</li>
        <div className='divider'></div>
        <li className='menu-li'>VIEW MY BLOGS</li>
        <div className='divider'></div>
        <li className='menu-li' onClick={ this.profileClick }>PROFILE</li>
        <div className='divider'></div>
        <li className='menu-li' onClick={ this.handleLogout }>LOG OUT</li>
      </div>
    );
  }
}

export default withRouter(UserMenu);
