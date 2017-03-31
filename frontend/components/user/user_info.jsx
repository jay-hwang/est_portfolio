import React from 'react';
import { withRouter } from 'react-router';
import EditUserFormContainer from './edit_user_form_container';
import PasswordFormContainer from './password_form_container';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.showEditForm = this.showEditForm.bind(this);
    this.showPasswordForm = this.showPasswordForm.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  showEditForm() {
    $('.user-info-display').fadeOut(150);
    $('#password-form').fadeOut(150);
    $('#edit-user-form').fadeIn(150);
  }

  showPasswordForm() {
    $('.user-info-display').fadeOut(150);
    $('#edit-user-form').fadeOut(150);
    $('#password-form').fadeIn(150);
  }

  handleDeleteUser() {
    if (confirm('Are you sure? Deleting your account is permanent.')) {
      const userId = this.props.currentUser.id;
      this.props.logout();
      this.props.router.push('/');
      this.props.deleteUser(userId);
    }
  }

  render() {
    return (
      <div className='user-info-box flex-center'>
        <div className='user-info'>
          <img className='user-pic'
            src={ this.props.currentUser.profile_pic_url } />
          <EditUserFormContainer />
          <PasswordFormContainer />
          <section className='user-contents user-info-display'>
            <div className='user-content'>
              <div className='attr-name'>NAME</div>
              <div className='attr-value'>
                { this.props.currentUser.first_name } { this.props.currentUser.last_name }
              </div>

            </div>

            <div className='user-content'>
              <div className='attr-name'>EMAIL</div>
              <div className='attr-value'>
                { this.props.currentUser.email }
              </div>
            </div>

            <div className='user-content'>
              <div className='attr-name'>USERNAME</div>
              <div className='attr-value'>
                { this.props.currentUser.username }
              </div>

            </div>
          </section>
        </div>

        <div className='user-buttons'>
          <div className='user-button' onClick= { this.showPasswordForm }>
            <img className='ub-icon' id='password-icon'
              src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1491000218/lock_akwkej.png' />
          </div>

          <div className='user-button' onClick={ this.showEditForm }>
            <img className='ub-icon' id='edit-icon'
              src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1491000219/edit_yui22e.png' />
          </div>

          <div className='user-button' onClick={ this.handleDeleteUser }>
            <img className='ub-icon' id='delete-icon'
              src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1491000219/delete_tvs1an.png' />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserInfo);
