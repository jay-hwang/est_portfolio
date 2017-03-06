import React from 'react';
import { withRouter } from 'react-router';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.router.push('/home');
    }
  }

  handleLogout() {
    return this.props.logout();
  }

  render() {
    return (
      <div className='user-menu'>
        <li className='menu-li'>NEW BLOG</li>
        <div className='divider'></div>
        <li className='menu-li'>EDIT MY BLOGS</li>
        <div className='divider'></div>
        <li className='menu-li'>ACCOUNT INFO</li>
        <div className='divider'></div>
        <li className='menu-li' onClick={ this.handleLogout }>LOG OUT</li>
      </div>
    );
  }
}

export default withRouter(UserMenu);
