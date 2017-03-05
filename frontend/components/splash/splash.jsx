import React from 'react';
import { withRouter } from 'react-router';
import Intro1 from '../intro/intro1';
import Intro2 from '../intro/intro2';
import Blogs from '../blog/blogs';
import Contact from '../contact/contact';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='splash-background'>
        <div className='screen'>
          <div className='splash'>

            <div className='content'>
              <div className='title'>
                TITLE
              </div>

              <div className='info'>
                THIS WILL BE A BOX THAT HOLDS INFORMATION ABOUT THE BLOG SITE
              </div>
            </div>
          </div>

          <Intro1 />
          <Intro2 />
          <Blogs />

          <Contact />
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
