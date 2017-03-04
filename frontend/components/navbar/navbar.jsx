import React from 'react';
import { withRouter } from 'react-router';
import NavbarLinks from './navbar_links';
import NavbarMenu from './navbar_menu';

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
        <NavbarMenu />
      </div>
    );
  }
}

export default withRouter(Navbar);
