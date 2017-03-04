import React from 'react';

const NavbarLinks = ({ openSubscribe }) => {
  const showMenu = () => {
    $(".menu-background").fadeIn(200);
    $(".menu").animate({ right: "+=350" }, 200);
  };

  return (
    <nav className='navbar'>
      <div className='box'>
        <button
          onClick={ openSubscribe }
          className='nav-btn btn'>SUBSCRIBE</button>
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
};

export default NavbarLinks;
