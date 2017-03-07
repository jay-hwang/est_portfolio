import React from 'react';
import EditUserFormContainer from './edit_user_form_container';
import PasswordFormContainer from './password_form_container';

const UserInfo = (props) => {

  const showEditForm = () => {
    $('.user-info-display').fadeOut(150);
    $('#password-form').fadeOut(150);
    $('#edit-user-form').fadeIn(150);
  };

  const showPasswordForm = () => {
    $('.user-info-display').fadeOut(150);
    $('#edit-user-form').fadeOut(150);
    $('#password-form').fadeIn(150);
  };

  const handleDeleteUser = () => {

  };

  return (
    <div className='user-info-box flex-center'>
      <div className='user-info'>
        <img className='user-pic'
          src={ props.currentUser.profile_pic_url } />
        <EditUserFormContainer />
        <PasswordFormContainer />
        <section className='user-contents user-info-display'>
          <div className='user-content'>
            <div className='attr-name'>NAME</div>
            <div className='attr-value'>
              { props.currentUser.first_name } { props.currentUser.last_name }
            </div>

          </div>

          <div className='user-content'>
            <div className='attr-name'>EMAIL</div>
            <div className='attr-value'>
              { props.currentUser.email }
            </div>
          </div>

          <div className='user-content'>
            <div className='attr-name'>USERNAME</div>
            <div className='attr-value'>
              { props.currentUser.username }
            </div>

          </div>
        </section>
      </div>

      <div className='user-buttons'>
        <div className='user-button' onClick= { showPasswordForm }>
          <img className='ub-icon' id='password-icon'
            src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1488825874/lock_eyvm3p.png' />
        </div>

        <div className='user-button' onClick={ showEditForm }>
          <img className='ub-icon' id='edit-icon'
            src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1488827447/edit_tb7zyp.png' />
        </div>

        <div className='user-button'>
          <img className='ub-icon' id='delete-icon'
            src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1488827447/delete_garaiy.png' />
        </div>
      </div>
    </div>
  );
};

// <div className='attr-edit'>EDIT</div>
// <div className='attr-edit'>EDIT</div>

export default UserInfo;
