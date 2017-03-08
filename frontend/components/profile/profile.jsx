import React from 'react';
import { withRouter } from 'react-router';
import UserInfoContainer from '../user/user_info_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='profile'>
        <UserInfoContainer />
      </div>
    );
  }
}

export default withRouter(Profile);


// u = User.create({
//   first_name: 'test',
//   last_name: 'user',
//   username: 'test-user',
//   password: 'password',
//   email: 'test.user@fake.com'
// })
