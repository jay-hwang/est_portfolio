import React from 'react';
import { withRouter } from 'react-router';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.profileClick = this.profileClick.bind(this);
    this.hideMenu = this.props.hideMenu.bind(this);
    this.blogClick = this.blogClick.bind(this);
    this.viewBlogsClick = this.viewBlogsClick.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn && !window.currentUser) {
      this.props.router.push('/profile');
    }
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

  blogClick() {
    if (this.props.loggedIn) {
      this.props.router.push('/new-blog');
      this.hideMenu();
    }
  }

  viewBlogsClick() {
    if (this.props.loggedIn) {
      this.props.router.push('/blogs/user');
      this.hideMenu();
    }
  }

  render() {
    return (
      <div className='user-menu'>
        <li className='menu-li' onClick={ this.blogClick }>NEW BLOG</li>
        <div className='divider'></div>
        <li className='menu-li' onClick={ this.viewBlogsClick }>VIEW MY BLOGS</li>
        <div className='divider'></div>
        <li className='menu-li' onClick={ this.profileClick }>PROFILE</li>
        <div className='divider'></div>
        <li className='menu-li' onClick={ this.handleLogout }>LOG OUT</li>
      </div>
    );
  }
}

export default withRouter(UserMenu);
