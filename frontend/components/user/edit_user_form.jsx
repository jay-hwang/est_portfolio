import React from 'react';

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: props.currentUser.first_name,
      last_name: props.currentUser.last_name,
      username: props.currentUser.username,
      password: props.currentUser.password
    };
  }
}

export default EditUserForm;
