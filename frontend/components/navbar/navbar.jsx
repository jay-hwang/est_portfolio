import React from 'react';
import { withRouter } from 'react-router';
import NavbarLinks from './navbar_links';
import NavbarMenuContainer from './navbar_menu_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.openSubscribe = this.openSubscribe.bind(this);
  }

  openSubscribe() {
    $(".subscribe-container").fadeIn(200);
  }

  render() {
    return (
      <div>
        <NavbarLinks openSubscribe={ this.openSubscribe } />
        <div className='hidden-nav display-none'>
          <NavbarLinks openSubscribe={ this.openSubscribe } />
        </div>
        <NavbarMenuContainer props={ this.props } />
      </div>
    );
  }
}

export default withRouter(Navbar);
