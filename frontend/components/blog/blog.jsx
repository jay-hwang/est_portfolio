import React from 'react';
import CommentsContainer from '../comment/comments_container';
import TagsContainer from '../tag/tags_container';
import TaggingsContainer from '../tagging/taggings_container';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.blogId = this.props.routeParams.blog_id;
    this.mapBlog = this.mapBlog.bind(this);
  }

  componentDidMount() {
    this.props.requestBlog(this.blogId);
  }

  mapBlog() {
    if (!this.props.blogs[this.blogId]) { return null; }
    return this.props.blogs[this.blogId];
  }

  render() {
    let blog = this.mapBlog();

    if (!blog) {
      return (
        <div></div>
      );
    } else {
      return (
        <section className='blog-box'>
          <div className='blog-show'>
            <h3 className='header'>{ blog.title }</h3>
            <p className='body'>{ blog.body }</p>
          </div>

          <TaggingsContainer blog={ blog } />
          <TagsContainer blog={ blog } />
          <CommentsContainer blog={ blog } />
        </section>
      );
    }
  }
}

export default Blog;
