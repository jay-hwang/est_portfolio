import React from 'react';
import { withRouter } from 'react-router';
import { _mapErrorsToHTML } from '../../util/helper_methods';

class SubscriptionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    };
    this.blankState = this.state;

    this.closeSubscriptionForm = this.closeSubscriptionForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const subscription = this.state;
    this.props.createSubcription(subscription);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  closeSubscriptionForm() {
    this.setState(this.blankState);
    $('.subscribe-container').fadeOut(200);
  }

  render() {
    const errors = this.props.subscriptionErrors;
    if (errors) {
      this.errorsLi = _mapErrorsToHTML(errors);
    }

    return (
      <div className='subscribe-container display-none'>

        <div className='subscribe desktop'>
          <span className='second-title'>SUBSCRIBE</span>
          <span className='exit' onClick={ this.closeSubscriptionForm }>X</span>

          <form className='subscribe-form' onSubmit={ this.handleSubmit }>
            { this.errorsLi }
            <input type='text'
              onChange={ this.handleChange('name') }
              value={ this.state.name }
              className='subscribe-field'
              placeholder='Full Name' />
            <input type='text'
              onChange={ this.handleChange('email') }
              value={ this.state.email }
              className='subscribe-field'
              placeholder='Email' />
            <button className='subscribe-submit-btn btn'>SUBSCRIBE</button>
          </form>
        </div>

        <div className='subscribe-mobile mobile'>
          <span className='second-title'>SUBSCRIBE</span>
          <span className='exit' onClick={ this.closeSubscriptionForm }>X</span>

          <form className='subscribe-form' onSubmit={ this.handleSubmit }>
            { this.errorsLi }
            <input type='text'
              onChange={ this.handleChange('name') }
              value={ this.state.name }
              className='subscribe-field'
              placeholder='Full Name' />
            <input type='text'
              onChange={ this.handleChange('email') }
              value={ this.state.email }
              className='subscribe-field'
              placeholder='Email' />
            <button className='subscribe-submit-btn btn'>SUBSCRIBE</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SubscriptionForm);
