import React from 'react';

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.currentUser.id,
      username: props.currentUser.username,
      first_name: props.currentUser.first_name,
      last_name: props.currentUser.last_name,
      email: props.currentUser.email
    };

    this.resetFields = this.resetFields.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeEditForm = this.closeEditForm.bind(this);
  }

  componentWillReceiveProps() {
    this.closeEditForm(false);
  }

  handleChange(field) {
    return (e) => ( this.setState({ [field]: e.target.value }) );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.updateUser(user);
  }

  closeEditForm(shouldReset = true) {
    $('.user-info-display').fadeIn(150);
    $('#edit-user-form').fadeOut(150);
    if (shouldReset) { this.resetFields(); }
  }

  resetFields() {
    this.setState({
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      email: this.props.currentUser.email
    });
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
          { errorsLi }
          <p className='eui-name'>FIRST NAME</p>
          <input type='text'
            className='eui-value'
            value={ this.state.first_name }
            onChange={ this.handleChange('first_name') }
            placeholder='FIRST NAME' />
        </div>

        <div className='user-content'>
          <p className='eui-name'>LAST NAME</p>
          <input type='text'
            className='eui-value'
            value={ this.state.last_name }
            onChange={ this.handleChange('last_name') }
            placeholder='LAST NAME' />
        </div>

        <div className='user-content'>
          <p className='eui-name'>USERNAME</p>
          <input type='text'
            className='eui-value'
            value={ this.state.username }
            onChange={ this.handleChange('username') }
            placeholder='USERNAME' />
        </div>

        <div className='user-content'>
          <p className='eui-name'>EMAIL</p>
          <input type='text'
            className='eui-value'
            value={ this.state.email }
            onChange={ this.handleChange('email') }
            placeholder='EMAIL' />
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
