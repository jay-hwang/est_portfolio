import React from 'react';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import SubscriptionFormContainer from './subscription/subscription_form_container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children;
  }

  render() {
    // <Navbar />
    // <SubscriptionFormContainer />
    return (
      <div id='app'>
        {this.props.children}
      </div>
    );
  }
}

export default App;
