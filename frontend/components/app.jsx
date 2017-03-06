import React from 'react';
import Splash from './splash/splash';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Subscribe from './subscribe/subscribe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children;
  }

  render() {
    return (
      <div id='app'>
        <Navbar />
        <Subscribe />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
