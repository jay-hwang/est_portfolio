import React from 'react';
import SessionFormContainer from '../session/session_form_container';

const NavbarMenu = () => {
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

  return (
    <div className='menu-background display-none'>
      <div className='menu'>
        <span className='exit' onClick={ hideMenu }>X</span>
        <ul className='menu-ul'>
          <li className='menu-li'>BLOGS</li>
          <div className='divider'></div>
          <li className='menu-li'>ABOUT</li>
          <div className='divider'></div>
          <SessionFormContainer />
          <li className='menu-li loginli' onClick={ showSessionForm }>LOG IN</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;
