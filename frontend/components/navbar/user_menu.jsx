import React from 'react';
import { withRouter } from 'react-router';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleAccountInfo = this.handleAccountInfo.bind(this);
    this.profileClick = this.profileClick.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn && !window.currentUser) {
      this.props.router.push('/profile');
    }
  }

  handleLogout() {
    return this.props.logout();
  }

  handleAccountInfo() {
    if (this.props.loggedIn) {
      this.props.router.push('/account-info');
    }
  }

  profileClick() {
    if (this.props.loggedIn) {
      this.props.router.push('/profile');
    }
  }

  render() {
    return (
      <div className='user-menu'>
        <li className='menu-li'>NEW BLOG</li>
        <div className='divider'></div>
        <li className='menu-li'>EDIT MY BLOGS</li>
        <div className='divider'></div>
        <li className='menu-li' onClick={ this.profileClick }>PROFILE</li>
        <div className='divider'></div>
        <li className='menu-li' onClick={ this.handleLogout }>LOG OUT</li>
      </div>
    );
  }
}

export default withRouter(UserMenu);
