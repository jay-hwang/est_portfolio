import React from 'react';

const NavbarLinks = ({ isHiddenNav, openSubscribe }) => {
  const showMenu = () => {
    $(".menu-background").fadeIn(200);
    $(".menu-mobile").fadeIn(200);
    $(".menu").animate({ right: "+=350" }, 200);
  };

  if (isHiddenNav) {
    return (
      <nav className='navbar'>
        <div className='box'>
          <button onClick={ openSubscribe } className='nav-btn btn hel'>SUBSCRIBE</button>
        </div>
        <div className='box menu-box' onClick={ showMenu }>
          <span className='nav-menu hel'>MENU</span>
          <div className='hamburger'>
            <span className='hel-hamburger-slab'></span>
            <span className='hel-hamburger-slab'></span>
            <span className='hel-hamburger-slab'></span>
          </div>
        </div>
      </nav>
    );
  }
  else {
    return (
      <nav className='navbar'>
        <div className='box'>
          <button onClick={ openSubscribe } className='nav-btn btn'>SUBSCRIBE</button>
        </div>
        <div className='box menu-box' onClick={ showMenu }>
          <span className='nav-menu'>MENU</span>
          <div className='hamburger'>
            <span className='hamburger-slab'></span>
            <span className='hamburger-slab'></span>
            <span className='hamburger-slab'></span>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavbarLinks;
