import React from 'react';
import RelatedBlog from './related_blog';

class RelatedBlogs extends React.Component {
  constructor(props) {
    super(props);

    this.mapRelatedBlogs = this.mapRelatedBlogs.bind(this);
  }

  componentDidMount() {
    const tags = this.props.blog.tags.map(blog => ( blog.name ));
    this.props.requestBlogs(tags);
  }

  mapRelatedBlogs() {
    let blogKeys = Object.keys(this.props.blogs);
    if (blogKeys.length === 0) { return; }

    // throw in a condition to remove related blog if the id === this.props.blog.id
    // only render 3 related blogs at most
    debugger;
    return blogKeys.map((id, i) => (
      <li key={i}>
        <RelatedBlog blog={ this.props.blogs[id] } />
      </li>
    ));
  }

  render() {
    let relatedBlogs = this.mapRelatedBlogs();

    return (
      <section className='related-blogs'>
        <h3 className='header'>RELATED BLOGS</h3>
        { relatedBlogs }
      </section>
    );
  }
}

export default RelatedBlogs;
