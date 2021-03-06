import React from 'react';
import BlogLinkContainer from './blog_link/blog_link_container';
import BlogFilterContainer from '../filter/blog_filter_container';

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.mapBlogLis = this.mapBlogLis.bind(this);
  }

  componentDidMount() {
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
      let i = 0, len = blogKeys.length;
      while (blogLis.length < 6 && len >= 1) {
        let blog = this.props.blogs[blogKeys[i]];
        blogLis.push(
          <li key={i}>
            <BlogLinkContainer blog={ blog }
              isSplash={ this.props.isSplash } />
          </li>
        );
        i++;
        len--;
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
        <div>
          <div className='blogs-index desktop'>
            <section className='blogs-box-large desktop'>
              <ul className='blogs-large'>{ blogLis }</ul>
            </section>
            <BlogFilterContainer />
          </div>

          <div className='blogs-index mobile'>
            <section className='blogs-box-large-mobile mobile'>
              <BlogFilterContainer isMobile={ true } />
              <ul className='blogs-large'>{ blogLis }</ul>
            </section>
          </div>
        </div>
      );
    }
  }
}

export default Blogs;
