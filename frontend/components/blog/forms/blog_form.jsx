import React from 'react';
import { withRouter } from 'react-router';
import Textarea from 'react-textarea-autosize';
import TaggingsFormContainer from '../../tagging/taggings_form_container';
import UploadButton from '../../cloudinary/upload_button';

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
      body: '',
      image_url: ''
    };
    this.taggingActions = [];

    this.dispatchTaggingActions = this.dispatchTaggingActions.bind(this);
    this.queueTaggingAction = this.queueTaggingAction.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addImage = this.addImage.bind(this);
    this.initBlog = this.initBlog.bind(this);
  }

  componentDidMount() {
    if (!this.props.isNew) {
      this.props.requestBlog(this.blogId);
    }
  }

  componentDidUpdate() {
    if (this.props.messages.success) {
      this.dispatchTaggingActions();
      this.props.router.push('/blogs/user');
    }
    if (!this.props.isNew) { this.initBlog(); }
  }

  queueTaggingAction(taggingAction) {
    this.taggingActions.push(taggingAction);
  }

  dispatchTaggingActions() {
    this.taggingActions.forEach(action => {
      if (action.type === 'CREATE') {
        action.tagging['blog_id'] = this.props.recentReceived.id;
        this.props.createTagging(action.tagging);
      } else {
        this.props.deleteTagging(action.id);
      }
    });
    this.props.blogChangeReceived();
  }

  initBlog() {
    if (this.hasBlog) { return; }
    this.blog = this.props.blogs[this.blogId];
    this.hasBlog = true;

    this.setState({
      title: this.blog.title,
      body: this.blog.body,
      image_url: this.blog.image_url
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
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  addImage(url) {
    this.setState({ image_url: url });
  }

  showUploadButton() {
    $('.upload-img-btn').fadeIn();
  }

  hideUploadButton() {
    $('.upload-img-btn').fadeOut();
  }

  render() {
    const errors = this.props.errors;
    if (errors) {
      this.errorsLi = errors.map((error, i) => (
        <li key={i} className='error'>{ error }</li>
      ));
    }

    let imageSection = [];
    if (this.state.image_url.length === 0) {
      imageSection.push(
        <UploadButton key={ Math.random() } addImage={ this.addImage } />
      );
    } else {
      imageSection.push(
        <img key={ Math.random() } className='blog-img' src={ this.state.image_url } />
      );
    }

    return (
      <div className='blog-bg'>
        <div className='blog'>
          <form className='blog-content blog-form desktop' onSubmit={ this.handleSubmit }>
            { this.errorsLi }

            <div className='blink-img'
              onMouseLeave={ this.hideUploadButton }
              onMouseEnter={ this.showUploadButton }>
              { imageSection }
            </div>

            <div className='blink-intro'>
              <Textarea onChange={ this.handleChange('title') }
                value={ this.state.title }
                placeholder='Title'
                className='blink-title blog-input'>
              </Textarea>

              <Textarea className='blink-body blog-body-input blog-input'
                value={ this.state.body }
                placeholder='Write about your blog here'
                onChange={ this.handleChange('body') }>
              </Textarea>
            </div>

            <TaggingsFormContainer blogId={ this.blogId }
              isNew={ this.props.isNew }
              queueTaggingAction={ this.queueTaggingAction } />

            <button className='blog-submit-btn btn'>{ this.formType } BLOG</button>
          </form>

          <form className='blog-content-mobile blog-form mobile'
            onSubmit={ this.handleSubmit }>
            { this.errorsLi }

            <div className='blink-img'
              onMouseLeave={ this.hideUploadButton }
              onMouseEnter={ this.showUploadButton }>
              { imageSection }
            </div>

            <div className='blink-intro-mobile'>
              <Textarea onChange={ this.handleChange('title') }
                value={ this.state.title }
                placeholder='Title'
                className='blink-title blog-input'>
              </Textarea>

              <Textarea className='blink-body blog-body-input blog-input'
                value={ this.state.body }
                placeholder='Write about your blog here'
                onChange={ this.handleChange('body') }>
              </Textarea>
            </div>

            <TaggingsFormContainer blogId={ this.blogId }
              isNew={ this.props.isNew }
              queueTaggingAction={ this.queueTaggingAction } />

            <button className='blog-submit-btn btn'>{ this.formType } BLOG</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(BlogForm);
