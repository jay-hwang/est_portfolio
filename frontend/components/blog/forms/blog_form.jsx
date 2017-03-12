import React from 'react';
import { withRouter } from 'react-router';

class BlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author_id: this.props.currentUser.id,
      title: '',
      body: ''
    };

    this.formType = this.props.isNew ? 'Create' : 'Update';

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const blog = this.state;

    if (this.props.isNew) {
      this.props.createBlog(blog);
    } else {
      this.props.updateBlog(blog);
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const errors = this.props.errors;
    if (errors) {
      this.errorsLi = errors.map((error, i) => (
        <li key={i} className='error'>{ error }</li>
      ));
    }

    return (
      <div className='blog-form-box'>
        <form className='blog-form' onSubmit={ this.handleSubmit }>
          { this.errorsLi }

          <input type=''
            value={ this.state.title }
            onChange={ this.handleChange('title') }
            placeholder='Blog Title'
            className='blog-input' />

          <textarea className='blog-body blog-input'
            value={ this.state.body }
            onChange={ this.handleChange('body') }
            placeholder='Write your blog here...' />

          <button className='blog-submit-btn'>{ this.formType } Blog</button>
        </form>
      </div>
    );
  }
}

export default withRouter(BlogForm);
