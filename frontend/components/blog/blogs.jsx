import React from 'react';
import BlogLinkContainer from './blog_link_container';

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.mapBlogLis = this.mapBlogLis.bind(this);
  }

  componentDidMount() {
    this.props.requestBlogs();
  }

  mapBlogLis() {
    let blogLis = [];
    if (this.props.isUserBlogs) {
      blogLis = this.props.currentUser.blogs.map((blog, i) => (
        <li key={i} className='blog'>
          <BlogLinkContainer blog={ blog }
            isUserBlogs={ this.props.isUserBlogs } />
        </li>
      ));
    } else {
      blogLis = Object.keys(this.props.blogs).map((id, i) => (
        <li key={i} className='blog'>
          <BlogLinkContainer blog={ this.props.blogs[id] } />
        </li>
      ));
    }
    return blogLis;
  }

  render() {
    let title = this.props.isUserBlogs ? 'MY' : 'RECENT',
        blogLis = this.mapBlogLis();

    return (
      <section className='blogs-box'>
        <h3 className='second-title'>{ title } BLOGS</h3>
        <ul className='blogs'>{ blogLis }</ul>
      </section>
    );
  }
}

export default Blogs;
