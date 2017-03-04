import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({ user });
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const errors = this.props.errors;
    let errorsLi;
    if (errors) {
      errorsLi = errors.map((error, i) => (
        <li key={i}>{ error }</li>
      ));
    }

    return (
      <form className='session' onSubmit={ this.handleSubmit }>
        <input type='text'
          value={ this.state.username }
          onChange={ this.handleChange('username') }
          placeholder='Username'
          className='session-input' />

        <input type='password'
          value={ this.state.password }
          onChange={ this.handleChange('password') }
          placeholder='Password'
          className='session-input' />

        <button className='session-btn'>LOG IN</button>
      </form>
    );
  }
}

export default withRouter(SessionForm);
