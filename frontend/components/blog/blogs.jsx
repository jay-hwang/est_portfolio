import React from 'react';
import BlogLinkContainer from './blog_link_container';

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.didReceiveBlogs = this.isEmptyObj(props.blogs) ? false : true;
    this.didMapBlogs = false;

    this.state = {
      blogLis: ''
    };

    this.delegateBlogs = this.delegateBlogs.bind(this);
    this.isEmptyObj = this.isEmptyObj.bind(this);
    this.initBlogs = this.initBlogs.bind(this);
    this.mapBlogs = this.mapBlogs.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.requestBlogs();
    this.initBlogs();
  }

  componentDidUpdate() {
    this.initBlogs();
  }

  initBlogs() {
    console.log('initBlogs called');
    this.blogs = this.delegateBlogs();
    this.mapBlogs();
  }

  isEmptyObj(obj) {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) {
      return true;
    } else {
      return false;
    }
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

  update() {
    console.log('update called');
    this.didMapBlogs = false;
    this.initBlogs();
  }

  mapBlogs() {
    if (this.didMapBlogs) { return; }
    let blogKeys = Object.keys(this.blogs);

    if (blogKeys.length > 0 && this.blogs.constructor === Object) {
      this.didMapBlogs = true;

      let blogLis = blogKeys.map((blogKey, i) => (
        <li key={i} className='blog'>
          <BlogLinkContainer blog={ this.blogs[blogKey] }
            isUserBlogs={ this.props.isUserBlogs }
            update={ this.update } />
        </li>
      ));

      console.log('about to setState in mapBlogs');

      this.setState({
        blogLis: blogLis
      });

    }
  }

  render() {
    let title = this.props.isUserBlogs ? 'MY' : 'RECENT';

    // check state
    // debugger;

    return (
      <section className='blogs-box'>
        <span className='second-title'>{ title } BLOGS</span>
        <ul className='blogs'>{ this.state.blogLis }</ul>
      </section>
    );
  }
}

export default Blogs;
