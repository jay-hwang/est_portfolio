import React from 'react';
import { withRouter } from 'react-router';
import BlogContainer from './blog_container';

const BlogActions = ({ isUserBlogs, handleEdit, handleDelete }) => {
  if (isUserBlogs) {
    return (
      <div className='blog-actions'>
        <div className='blog-action' onClick={ handleEdit }>EDIT</div>
        <div className='blog-action' onClick={ handleDelete }>DELETE</div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

class BlogLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleBlogShow = this.handleBlogShow.bind(this);
  }

  handleEdit(e) {
    e.stopPropagation();
    alert('will re-route to edit');
  }

  handleDelete(e) {
    e.stopPropagation();
    if (confirm('Are you sure? Deleting a blog is permanent')) {
      const blogId = this.props.blog.id;
      this.props.removeBlog(blogId);
      this.props.update();
    }
  }

  handleBlogShow() {
    this.props.router.push(`/blogs/${this.props.blog.id}`);
  }



  render() {
    return (
      <div className='blog-link' onClick={ this.handleBlogShow }>
        <span className='blog-title'>{ this.props.blog.title }</span>
        <p className='blog-intro'>
          { this.props.blog.created_at }
        </p>

        <BlogActions isUserBlogs={ this.props.isUserBlogs }
          handleEdit={ this.handleEdit }
          handleDelete={ this.handleDelete } />
      </div>
    );
  }
}

export default withRouter(BlogLink);
