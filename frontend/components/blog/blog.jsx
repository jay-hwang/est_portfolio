import React from 'react';

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
    if (!this.props.blogs[this.blogId]) { return ''; }
    return this.props.blogs[this.blogId];
  }

  render() {
    let blog = this.mapBlog();

    return (
      <section className='blog-show'>
        <h3 className='header'>{ blog.title }</h3>
        <p className='body'>{ blog.body }</p>
      </section>
    );
  }
}

export default Blog;
