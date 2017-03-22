import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      blog_id: props.blog.id,
      author_name: '',
      author_email: '',
      author_id: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form className='comment form'>
        <input type='text'
          onChange={ this.state.handleChange('author_name') }
          value={ this.state.author_name }
          placeholder='Full Name' />

        <input type='text'
          onChange={ this.state.handleChange('author_email') }
          value={ this.state.author_email }
          placeholder='Email' />

        <input type='text'
          onChange={ this.handleChange('body') }
          value={ this.state.body }
          placeholder='Write your comment here' />

        <button className='btn submit-btn'>Post Comment</button>
      </form>
    );
  }
}

export default CommentForm;
