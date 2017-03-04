import React from 'react';
import { withRouter } from 'react-router';

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.closeSubscribe = this.closeSubscribe.bind(this);
  }

  closeSubscribe() {
    $('.subscribe-container').fadeOut(200);
  }

  render() {
    return (
      <div className='subscribe-container display-none'>
        <div className='subscribe'>
          <span className='second-title'>SUBSCRIBE</span>
          <span className='exit' onClick={ this.closeSubscribe }>X</span>
          <form className='subscribe-form'>
            <input type='text'
              className='subscribe-field'
              placeholder='Full Name' />
            <input type='text'
              className='subscribe-field'
              placeholder='Email' />
            <div className='subscribe-submit-btn btn'>SUBSCRIBE</div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Subscribe);
