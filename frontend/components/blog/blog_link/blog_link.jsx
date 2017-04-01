import React from 'react';
import { withRouter } from 'react-router';
import BlogLinkSmall from './blog_link_small';
import BlogLinkLarge from './blog_link_large';

class BlogLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleBlogShow = this.handleBlogShow.bind(this);
  }

  handleEdit(e) {
    e.stopPropagation();
    this.props.router.push(`/blogs/edit/${this.props.blog.id}`);
  }

  handleDelete(e) {
    e.stopPropagation();
    if (confirm('Are you sure? Deleting a blog is permanent')) {
      const blogId = this.props.blog.id;
      this.props.deleteBlog(blogId);
      this.props.requestUser(this.props.currentUser.id);
    }
  }

  handleBlogShow() {
    this.props.router.push(`/blogs/${this.props.blog.id}`);
  }

  render() {
    console.log(`blog_link.jsx this.props.blog: ${this.props.blog}`);
    if (this.props.isSplash || this.props.isUserBlogs) {
      return (
        <div>
          <BlogLinkSmall blog={ this.props.blog}
            handleBlogShow={ this.handleBlogShow }
            handleEdit={ this.handleEdit }
            handleDelete={ this.handleDelete }
            isUserBlogs={ this.props.isUserBlogs } />
        </div>
      );
    } else {
      return (
        <div>
          <BlogLinkLarge blog={ this.props.blog }
            handleBlogShow={ this.handleBlogShow } />
        </div>
      );
    }
  }
}

export default withRouter(BlogLink);
