import React from 'react';
import { withRouter } from 'react-router';
import Intro1 from '../intro/intro1';
import Intro2 from '../intro/intro2';
import BlogsContainer from '../blog/blogs_container';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='splash-bg'></div>
          <div className='screen'>

            <div className='splash'>
              <div className='content'>
                <div className='title'>
                  TACKLING TRAFFICKING
                </div>

                <div className='info'>
                  Some thoughts on Problematising the solutions to Human Trafficking
                </div>
              </div>
            </div>

            <Intro1 />
            <Intro2 />
            <BlogsContainer isSplash={ true } blogs={ this.props.blogs } />
            <Contact />

          </div>
          <Footer />
      </div>
    );
  }
}

export default withRouter(Splash);

//
