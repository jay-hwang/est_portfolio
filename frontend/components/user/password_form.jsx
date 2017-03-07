import React from 'react';

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.currentUser.id,
      currentPassword: '',
      password: '',
      passwordRe: ''
    };

    this.resetFields = this.resetFields.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closePasswordForm = this.closePasswordForm.bind(this);
  }

  componentWillReceiveProps() {
    this.closePasswordForm(false);
  }

  handleChange(field) {
    return (e) => ( this.setState({ [field]: e.target.value }) );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.updateUser(user);
  }

  closePasswordForm(shouldReset = true) {
    $('.user-info-display').fadeIn(150);
    $('#password-form').fadeOut(150);
    if (shouldReset) { this.resetFields(); }
  }

  resetFields() {
    this.setState({
      currentPassword: '',
      password: '',
      passwordRe: ''
    });
  }

  render() {
    return (
      <form id='password-form'
        className='edit-user-form user-contents display-none'>
        <div className='user-content'>
          <p className='eui-name'>CURRENT</p>
          <input type='password'
            className='eui-value'
            value={ this.state.currentPassword }
            onChange={ this.handleChange('currentPassword') }
            placeholder='CURRENT PASSWORD' />
        </div>

        <div className='user-content'>
          <p className='eui-name'>NEW</p>
          <input type='password'
            className='eui-value'
            value={ this.state.password }
            onChange={ this.handleChange('password') }
            placeholder='NEW PASSWORD' />
        </div>

        <div className='user-content'>
          <p className='eui-name'>CONFIRM</p>
          <input type='password'
            className='eui-value'
            value={ this.state.passwordRe }
            onChange={ this.handleChange('passwordRe') }
            placeholder='CONFIRM NEW PASSWORD' />
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
