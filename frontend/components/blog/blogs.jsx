import React from 'react';
import BlogLinkContainer from './blog_link_container';

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.didReceiveBlogs = this.isEmptyObj(props.blogs) ? false : true;
    this.didMapBlogs = false;

    this.delegateBlogs = this.delegateBlogs.bind(this);
    this.isEmptyObj = this.isEmptyObj.bind(this);
    this.mapBlogs = this.mapBlogs.bind(this);
  }

  componentDidMount() {
    this.blogs = this.delegateBlogs();
    this.mapBlogs();
  }

  componentDidUpdate() {
    this.blogs = this.delegateBlogs();
    this.mapBlogs();
  }

  isEmptyObj(obj) {
    let keys = Object.keys(obj);
    if (keys.length === 0 && obj.constructor === Object) {
      return true;
    }
    return false;
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
    if (this.didMapBlogs) { return; }
    let blogKeys = Object.keys(this.blogs);

    if (blogKeys.length > 0 && this.blogs.constructor === Object) {
      debugger;
      this.didMapBlogs = true;

      this.blogLis = blogKeys.map((blogKey, i) => (
        <li key={i} className='blog'>
          <BlogLinkContainer blog={ this.blogs[blogKey] } />
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
        <ul className='blogs'>{ this.blogLis }</ul>
      </section>
    );
  }
}

export default Blogs;
