import React from 'react';

const UserInfo = (props) => {
  return (
    <div className='user-info-box flex-center'>
      <div className='user-info'>
        <div className='user-pic'></div>

        <section className='user-contents'>
          <div className='user-content'>
            <div className='attr-name'>Name:</div>
            <div className='attr-value'>
              { props.currentUser.first_name } { props.currentUser.last_name }
            </div>
            <div className='attr-edit'>EDIT</div>
          </div>

          <div className='user-content'>

          </div>

          <div className='user-content'>
            <div className='attr-name'>Username:</div>
            <div className='attr-value'>
              { props.currentUser.username }
            </div>
            <div className='attr-edit'>EDIT</div>
          </div>
        </section>
      </div>

      <div className='user-buttons'>
        <div className='user-button'>CHANGE PASSWORD</div>
        <div className='user-button'></div>
        <div className='user-button'>DELETE ACCOUNT</div>
      </div>
    </div>
  );
};

export default UserInfo;
