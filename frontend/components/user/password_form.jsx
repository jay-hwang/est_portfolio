import React from 'react';

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPassword: '',
      password: '',
      passwordRe: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => ( this.setState({ [field]: e.target.value }) );
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('updated password');
  }

  closePasswordForm() {
    $('.user-info-display').fadeIn(150);
    $('#password-form').fadeOut(150);
  }

  render() {
    return (
      <form id='password-form'
        className='edit-user-form user-contents display-none'>
        <div className='user-content'>
          <p className='eui-name'>CURRENT</p>
          <input type='text'
            className='eui-value'
            value={ this.state.currentPassword }
            onChange={ this.handleChange('currentPassword') }
            placeholder='Current Password' />
        </div>

        <div className='user-content'>
          <p className='eui-name'>NEW</p>
          <input type='text'
            className='eui-value'
            value={ this.state.password }
            onChange={ this.handleChange('password') }
            placeholder='New Password' />
        </div>

        <div className='user-content'>
          <p className='eui-name'>CONFIRM</p>
          <input type='text'
            className='eui-value'
            value={ this.state.passwordRe }
            onChange={ this.handleChange('passwordRe') }
            placeholder='Confirm New Password' />
        </div>

        <div className='eu-row'>
          <div className='eu-btn cancel-btn'
            onClick={ this.closePasswordForm }>
            CANCEL
          </div>
          <div className='eu-btn update-btn'
            onClick={ this.handleSubmit }>
            UPDATE
          </div>
        </div>
      </form>
    );
  }
}

export default PasswordForm;
