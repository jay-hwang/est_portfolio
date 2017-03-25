import React from 'react';
import { withRouter } from 'react-router';

class BlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.hasBlog = false;
    this.blogId = this.props.routeParams.blog_id;
    this.formType = this.props.isNew ? 'Create' : 'Update';

    this.state = {
      id: this.blogId ? this.blogId : null,
      author_id: this.props.currentUser.id,
      title: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.initBlog = this.initBlog.bind(this);
  }

  componentDidMount() {
    if (!this.props.isNew) {
      this.props.requestBlogs();
    }
  }

  componentDidUpdate() {
    if (!this.props.isNew) {
      this.initBlog();
    }
  }

  initBlog() {
    if (this.hasBlog) { return; }
    let blog = this.props.blogs[this.blogId];
    this.hasBlog = true;

    this.setState({
      title: blog.title,
      body: blog.body
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const blog = this.state;

    if (this.props.isNew) {
      this.props.createBlog(blog);
    } else {
      debugger;
      this.props.updateBlog(blog, this.props.router);
    }

    this.props.router.push(`/blogs/${blog.id}`);
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

          <textarea className='blog-body-input blog-input'
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
