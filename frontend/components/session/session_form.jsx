import React from 'react';
import { Link, withRouter } from 'react-router';
import { _mapErrorsToHTML } from '../../util/helper_methods';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: ''
    };

    this.errorsLi = null;

    this.hideMenu = this.props.hideMenu.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hideSessionForm = this.hideSessionForm.bind(this);
    this.showSessionForm = this.showSessionForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({ user });
    this.hideMenu();
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  hideSessionForm() {
    $(".session").slideUp();
    $('.loginli').fadeIn(350);
  }

  showSessionForm() {
    $(".session").slideDown();
    $('.loginli').fadeOut(325);
  }

  render() {
    const errors = this.props.errors;
    if (errors) {
      this.errorsLi = _mapErrorsToHTML(errors);
    }

    return (
      <div>
        <section className='session display-none'>
          <form className='session-form' onSubmit={ this.handleSubmit }>
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

            <ul className='errors'>
              { this.errorsLi }
            </ul>

            <div className='divider'></div>
            <button className='session-btn btn'>LOG IN</button>
            <div className='divider'></div>
            <div className='session-btn btn' onClick={ this.hideSessionForm }>CANCEL</div>
          </form>
        </section>
        <li className='menu-li loginli' onClick={ this.showSessionForm }>LOG IN</li>
      </div>
    );
  }
}

export default withRouter(SessionForm);
