import React from 'react';
import { withRouter } from 'react-router';
import CommentFormContainer from '../comment/comment_form_container';
import CommentsContainer from '../comment/comments_container';
import BlogTagsContainer from '../tag/blog_tags_container';
import TaggingsContainer from '../tagging/taggings_container';
import BlogNav from './helper/blog_nav';
import RelatedBlogsContainer from './helper/related_blogs_container';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.mapBlog = this.mapBlog.bind(this);
    this.showTags = this.showTags.bind(this);

    // UNDER CONSTRUCTION
    // this.nextBlog = this.nextBlog.bind(this);
    // this.previousBlog = this.previousBlog.bind(this);
  }

  componentDidMount() {
    this.props.requestBlog(this.props.routeParams.blog_id);
  }

  mapBlog() {
    if (!this.props.blogs[this.props.routeParams.blog_id]) { return null; }
    return this.props.blogs[this.props.routeParams.blog_id];
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
        <div className='blog-bg'>
          <div className='blog'>
            <div className='blog-content desktop'>
              <div className='blink-img'>
                <img className='blog-img' src={ blog.image_url } />
              </div>

              <div className='blink-intro'>
                <span className='blink-title'>{ blog.title }</span>
                <p className='blink-body'>
                  { blog.body }
                </p>
              </div>

              <BlogTagsContainer blog={ blog } />

              <RelatedBlogsContainer blog={ blog }
                requestBlog={ this.props.requestBlog }
                requestBlogs={ this.props.requestBlogs } />
            </div>

            <div className='blog-content-mobile mobile'>
              <div className='blink-img'>
                <img className='blog-img-mobile' src={ blog.image_url } />
              </div>

              <div className='blink-intro-mobile'>
                <span className='blink-title'>{ blog.title }</span>
                <p className='blink-body'>
                  { blog.body }
                </p>
              </div>

              <BlogTagsContainer blog={ blog } />

              <RelatedBlogsContainer blog={ blog }
                requestBlog={ this.props.requestBlog }
                requestBlogs={ this.props.requestBlogs } />
            </div>

            <CommentFormContainer blog={ blog } />

            <CommentsContainer blog={ blog } />
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Blog);
