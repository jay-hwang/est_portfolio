import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      blog_id: props.blog.id ? props.blog.id : null,
      author_name: '',
      author_email: '',
      author_id: ''
    };

    this.defaultState = this.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.blog.id && !this.state.blog_id) {
      this.state.blog_id = this.props.blog.id;
    }
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = this.state;
    comment.author_id = this.props.loggedIn ? this.props.currentUser.id : 3;
    this.props.createComment(comment);
    let defaultState = this.defaultState;
    this.setState({ defaultState });
  }

  render() {
    return (
      <form className='comment-form' name='commentForm' onSubmit={ this.handleSubmit }>
        <input type='text'
          className='form-input'
          onChange={ this.handleChange('author_name') }
          value={ this.state.author_name }
          placeholder='Full Name' />

        <input type='text'
          className='form-input'
          onChange={ this.handleChange('author_email') }
          value={ this.state.author_email }
          placeholder='Email' />

        <input type='text'
          className='form-input'
          onChange={ this.handleChange('body') }
          value={ this.state.body }
          placeholder='Write your comment here' />

        <button className='btn submit-btn'>Post Comment</button>
      </form>
    );
  }
}

export default CommentForm;
