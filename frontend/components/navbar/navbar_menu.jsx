import React from 'react';
import { withRouter } from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import UserMenuContainer from './user_menu_container';

class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);

    this.hideMenu = this.hideMenu.bind(this);
    this.showSessionForm = this.showSessionForm.bind(this);
    this.sessionMenu = this.sessionMenu.bind(this);
    this.homeClick = this.homeClick.bind(this);
    this.blogsClick = this.blogsClick.bind(this);
  }

  hideMenu() {
    $('.menu-background').fadeOut(200);
    $('.menu').animate({ right: '-=350' }, 200);
    $('.session').slideUp();
    $('.loginli').fadeIn(350);
  }

  showSessionForm() {
    $('.session').slideDown();
    $('.loginli').fadeOut(350);
  }

  sessionMenu() {
    if (this.props.loggedIn) {
      return (
        <UserMenuContainer hideMenu={ this.hideMenu } />
      );
    } else {
      return (
        <SessionFormContainer hideMenu={ this.hideMenu } />
      );
    }
  }

  homeClick() {
    this.hideMenu();
    this.props.router.push('/');
  }

  blogsClick() {
    this.hideMenu();
    this.props.router.push('/blogs');
  }

  render() {
    return (
      <div className='menu-background display-none'>
        <div className='menu'>
          <span className='exit' id='navmenu-exit' onClick={ this.hideMenu }>x</span>
          <ul className='menu-ul'>
            <li className='menu-li' onClick={ this.homeClick }>HOME</li>
            <div className='divider'></div>
            <li className='menu-li' onClick={ this.blogsClick }>BLOGS</li>
            <div className='divider'></div>
            { this.sessionMenu() }
          </ul>
        </div>
      </div>
    );
  }
}
// <div className='divider'></div>
// <li className='menu-li'>ABOUT</li>

export default withRouter(NavbarMenu);
