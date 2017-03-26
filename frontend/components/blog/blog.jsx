import React from 'react';
import CommentFormContainer from '../comment/comment_form_container';
import CommentsContainer from '../comment/comments_container';
import BlogTagsContainer from '../tag/blog_tags_container';
import TaggingsContainer from '../tagging/taggings_container';
import BlogNav from './helper/blog_nav';
import RelatedBlogsContainer from './helper/related_blogs_container';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.blogId = this.props.routeParams.blog_id;
    this.mapBlog = this.mapBlog.bind(this);
    this.showTags = this.showTags.bind(this);

    // UNDER CONSTRUCTION
    // this.nextBlog = this.nextBlog.bind(this);
    // this.previousBlog = this.previousBlog.bind(this);
  }

  componentDidMount() {
    this.props.requestBlog(this.blogId);
  }

  mapBlog() {
    if (!this.props.blogs[this.blogId]) { return null; }
    return this.props.blogs[this.blogId];
  }

  showTags() {
    $('.tags-box').slideDown();
  }

  // UNDER CONSTRUCTION
  // nextBlog(blog) {
  //   let next = this.props.blogs[blog.id - 1];
  // }
  //
  // previousBlog(blog) {
  //   let previous = this.props.blogs[blog.id + 1];
  // }

  render() {
    let blog = this.mapBlog();

    if (!blog) {
      return (
        <div></div>
      );
    } else {
      // let next = this.nextBlog(blog), previous = this.previousBlog(blog);

      return (
        <div className='blog'>
          <div className='blog-content'>
            <div className='blink-img'>

            </div>

            <div className='blink-intro'>
              <span className='blink-title'>{ blog.title }</span>
              <p className='blink-body'>
                { blog.body }
              </p>
            </div>

            <BlogTagsContainer blog={ blog } />

            <RelatedBlogsContainer blog={ blog }
              requestBlogs={ this.props.requestBlogs } />

          </div>

          <CommentFormContainer blog={ blog } />

          <CommentsContainer blog={ blog } />
        </div>
      );
    }
  }
}

export default Blog;
