import React from 'react';
import { withRouter } from 'react-router';
import Intro from './intro/intro';
import Intro1 from '../intro/intro1';
import Intro2 from '../intro/intro2';
import BlogsContainer from '../blog/blogs_container';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

// const Splash = props => {
//   return (
//     <div className='splash'>
//       <Intro />
//     </div>
//   );
// };

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='splash-container'>
        <div className='splash-bg'></div>
        <div className='veil'></div>
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
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
