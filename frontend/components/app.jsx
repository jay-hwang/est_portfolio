import React from 'react';
import Home from './home/home';
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
        {this.props.children}
        <Navbar />
        <Subscribe />
        <Home />

        <Footer />
      </div>
    );
  }
}

export default App;
