import React from 'react';

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: props.currentUser.first_name,
      last_name: props.currentUser.last_name,
      email: props.currentUser.email
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => ( this.setState({ [field]: e.target.value }) );
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('updated');
  }

  closeEditForm() {
    $('.user-info-display').fadeIn(150);
    $('#edit-user-form').fadeOut(150);
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
      <form id='edit-user-form'
        className='edit-user-form user-contents display-none'>
        <div className='user-content'>
          <p className='eui-name'>FIRST NAME</p>
          <input type='text'
            className='eui-value'
            value={ this.state.first_name }
            onChange={ this.handleChange('first_name') }
            placeholder='First Name' />
        </div>

        <div className='user-content'>
          <p className='eui-name'>LAST NAME</p>
          <input type='text'
            className='eui-value'
            value={ this.state.last_name }
            onChange={ this.handleChange('last_name') }
            placeholder='Last Name' />
        </div>

        <div className='user-content'>
          <p className='eui-name'>EMAIL</p>
          <input type='text'
            className='eui-value'
            value={ this.state.email }
            onChange={ this.handleChange('email') }
            placeholder='Email' />
        </div>

        <div className='eu-row'>
          <div className='eu-btn cancel-btn'
            onClick={ this.closeEditForm }>
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

export default EditUserForm;
