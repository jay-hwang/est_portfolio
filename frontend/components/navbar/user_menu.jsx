import React from 'react';
import { withRouter } from 'react-router';

const UserMenu = (props) => {
  const logout = (p) => {
    return p.logout;
  };

  return (
    <div className='user-menu'>
      <li className='menu-li'>NEW BLOG</li>
      <div className='divider'></div>
      <li className='menu-li'>EDIT MY BLOGS</li>
      <div className='divider'></div>
      <li className='menu-li'>ACCOUNT INFO</li>
      <div className='divider'></div>
      <li className='menu-li' onClick={ logout(props) }>LOG OUT</li>
    </div>
  );
};

export default UserMenu;
