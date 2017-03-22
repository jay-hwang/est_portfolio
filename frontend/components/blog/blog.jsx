import React from 'react';
import CommentContainer from '../comment/comment_container';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.blogId = this.props.routeParams.blog_id;
    this.mapBlog = this.mapBlog.bind(this);
    this.mapComments = this.mapComments.bind(this);
  }

  componentDidMount() {
    this.props.requestBlog(this.blogId);
  }

  mapBlog() {
    if (!this.props.blogs[this.blogId]) { return ''; }
    return this.props.blogs[this.blogId];
  }

  mapComments(blog) {
    if (blog === '') {
      return (
        <li></li>
      );
    } else {
      return blog.comments.map((comment, i) => (
        <li key={i}>
          <CommentContainer comment={ comment } blog={ blog } />
        </li>
      ));
    }
  }

  render() {
    let blog = this.mapBlog();
    let comments = this.mapComments(blog);

    return (
      <section className='blog-box'>
        <div className='blog-show'>
          <h3 className='header'>{ blog.title }</h3>
          <p className='body'>{ blog.body }</p>
        </div>
        <ul className='comments'>
          { comments }
        </ul>
      </section>
    );
  }
}

export default Blog;
