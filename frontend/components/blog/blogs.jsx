import React from 'react';
import BlogLink from './blog_link';

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.blogLis = null;
    this.didReceiveBlogs = false;
    this.blogs = this.delegateBlogs();

    this.delegateBlogs = this.delegateBlogs.bind(this);
    this.mapBlogs = this.mapBlogs.bind(this);
  }

  componentDidMount() {
    this.mapBlogs();
  }

  componentDidUpdate() {
    this.mapBlogs();
  }

  delegateBlogs() {
    if (this.props.isUserBlogs) {
      let blogsObj = {};
      this.props.blogs.map(blog => ( blogsObj[blog.id] = blog ));
      return blogsObj;
    } else {
      return this.props.blogs;
    }
  }

  mapBlogs() {
    if (this.didReceiveBlogs) { return; }
    let blogKeys = Object.keys(this.blogs);

    if (blogKeys.length > 0 && this.blogs.constructor === Object) {
      this.didReceiveBlogs = true;

      this.blogLis = blogKeys.map((blogKey, i) => (
        <li key={i} className='blog'>
          <BlogLink blog={ this.blogs[blogKey] }
            updateBlog={ this.props.updateBlog }
            removeBlog={ this.props.removeBlog } />
        </li>
      ));

      this.forceUpdate();
    }
  }

  render() {
    let title = this.props.isUserBlogs ? 'MY' : 'RECENT';

    return (
      <section className='blogs-box'>
        <span className='second-title'>{ title } BLOGS</span>
        <ul className='blogs'>
          { this.blogLis }
        </ul>
      </section>
    );
  }
}

export default Blogs;
