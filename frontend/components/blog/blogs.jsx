import React from 'react';
import BlogLinkContainer from './blog_link/blog_link_container';
import BlogFilterContainer from '../filter/blog_filter_container';

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.mapBlogLis = this.mapBlogLis.bind(this);
  }

  componentDidMount() {
    console.log('blogs component did mount');
    this.props.requestBlogs({});
  }

  mapBlogLis() {
    let blogLis = [];
    if (this.props.isUserBlogs) {
      blogLis = this.props.currentUser.blogs.map((blog, i) => (
        <li key={i}>
          <BlogLinkContainer blog={ blog }
            isUserBlogs={ this.props.isUserBlogs } />
        </li>
      ));
    } else if (this.props.isSplash) {
      let blogKeys = Object.keys(this.props.blogs);
      if (blogKeys.length === 0) { return []; }
      for (let i = 0; i < 6; i++) {
        let blog = this.props.blogs[blogKeys[i]];
        blogLis.push(
          <li key={i}>
            <BlogLinkContainer blog={ blog }
              isSplash={ this.props.isSplash } />
          </li>
        );
      }
    } else {
      blogLis = Object.keys(this.props.blogs).map((id, i) => (
        <li key={i}>
          <BlogLinkContainer blog={ this.props.blogs[id] }
            isSplash={ this.props.isSplash }/>
        </li>
      ));
    }
    return blogLis.reverse();
  }

  render() {
    let title = this.props.isUserBlogs ? 'MY' : 'RECENT',
        blogLis = this.mapBlogLis();

    if (blogLis.length === 0) {
      return (
        <div className='empty-blogs'>NO BLOGS HAVE BEEN WRITTEN YET</div>
      );
    } else if (this.props.isSplash) {
      return (
        <section className='blogs-box' id='splash-blogs'>
          <h3 className='second-title' id='splash-title'>{ title } BLOGS</h3>
          <ul className='blogs'>{ blogLis }</ul>
        </section>
      );
    } else if (this.props.isUserBlogs) {
      return (
        <section className='blogs-box'>
          <h3 className='second-title'>{ title } BLOGS</h3>
          <ul className='blogs'>{ blogLis }</ul>
        </section>
      );
    } else {
      return (
        <div className='blogs-index'>
          <section className='blogs-box-large'>
            <ul className='blogs-large'>{ blogLis }</ul>
          </section>
          <BlogFilterContainer />
        </div>
      );
    }
  }
}

export default Blogs;
