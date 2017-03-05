import React from 'react';
import { withRouter } from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import UserMenuContainer from './user_menu_container';

const NavbarMenu = (props) => {
  const hideMenu = () => {
    $(".menu-background").fadeOut(200);
    $(".menu").animate({ right: "-=350" }, 200);
    $(".session").slideUp();
    $('.loginli').fadeIn(350);
  };

  const showSessionForm = () => {
    $(".session").slideDown();
    $('.loginli').fadeOut(325);
  };

  const sessionMenu = (propsObj) => {
    if (propsObj.loggedIn) {
      return (
        <UserMenuContainer />
      );
    } else {
      return (
        <SessionFormContainer />
      );
    }
  };

  return (
    <div className='menu-background display-none'>
      <div className='menu'>
        <span className='exit' onClick={ hideMenu }>X</span>
        <ul className='menu-ul'>
          <li className='menu-li'>ABOUT</li>
          <div className='divider'></div>
          <li className='menu-li'>BLOGS</li>
          <div className='divider'></div>
          { sessionMenu(props) }
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;

// <SessionFormContainer />
// <UserMenu />
// <li className='menu-li loginli' onClick={ showSessionForm }>LOG IN</li>
