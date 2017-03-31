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
    return (
      <div id='app'>
        <Navbar />
        <SubscriptionFormContainer />
        {this.props.children}
      </div>
    );
  }
}

export default App;
