import React from 'react';
import { withRouter } from 'react-router';
import Textarea from 'react-textarea-autosize';
import TaggingsFormContainer from '../../tagging/taggings_form_container';

class BlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.hasBlog = false;
    this.blogId = this.props.routeParams.blog_id;
    this.formType = this.props.isNew ? 'CREATE' : 'UPDATE';

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
    if (!this.props.isNew) { this.props.requestBlog(this.blogId); }
  }

  componentDidUpdate() {
    if (!this.props.isNew) { this.initBlog(); }
  }

  initBlog() {
    if (this.hasBlog) { return; }
    this.blog = this.props.blogs[this.blogId];
    this.hasBlog = true;

    this.setState({
      title: this.blog.title,
      body: this.blog.body
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const blog = this.state;

    if (this.props.isNew) {
      this.props.createBlog(blog);
    } else {
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

    if (this.blog) {
      return (
        <div className='blog'>
          <form className='blog-content' onSubmit={ this.handleSubmit }>
            { this.errorsLi }

            <div className='blink-img'>

            </div>

            <div className='blink-intro'>
              <Textarea onChange={ this.handleChange('title') }
                value={ this.state.title }
                placeholder='Title'
                className='blink-title blog-input'>
                { this.state.title }
              </Textarea>

              <Textarea className='blink-body blog-body-input blog-input'
                value={ this.state.body }
                placeholder='Write about your blog here'
                onChange={ this.handleChange('body') }>
              </Textarea>
            </div>

            <TaggingsFormContainer blog={ this.blog } />

            <button className='blog-submit-btn btn'>{ this.formType } BLOG</button>
          </form>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default withRouter(BlogForm);
