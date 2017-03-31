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
      <div className='blog-content'>
        <form className='comment-form' onSubmit={ this.handleSubmit }>
          <label className='label'>
            <h4>COMMENT</h4>
            <textarea className='comment-input comment-body-input'
              onChange={ this.handleChange('body') }
              value={ this.state.body } />
          </label>

          <label className='label'>
            <h4>NAME<span className='required'>*</span></h4>
            <input type='text'
              className='comment-input'
              onChange={ this.handleChange('author_name') }
              value={ this.state.author_name } />
          </label>

          <label className='label'>
            <h4>EMAIL<span className='required'>*</span></h4>
            <input type='text'
              className='comment-input'
              onChange={ this.handleChange('author_email') }
              value={ this.state.author_email } />
          </label>

          <button className='btn submit-btn'>POST COMMENT</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
