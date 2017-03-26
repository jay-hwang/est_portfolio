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
    let blogIds = Object.keys(this.props.blogs);
    if (blogIds.length === 0) { return; }

    let relatedBlogs = [], i = 0, len = blogIds.length;
    while (relatedBlogs.length <= 3 && len > 1) {
      if (parseInt(blogIds[i]) !== this.props.blog.id) {
        relatedBlogs.push(
          <li key={i}>
            <RelatedBlog blog={ this.props.blogs[i] } />
          </li>
        );
      }
      i++;
      len--;
    }

    return relatedBlogs.length > 0 ? relatedBlogs : (<div>No Related Blogs</div>);
  }

  render() {
    let relatedBlogs = this.mapRelatedBlogs();

    return (
      <section className='related-blogs-section'>
        <h3 className='related-head'>RELATED BLOGS</h3>
        <div className='related-blogs'>
          { relatedBlogs }
        </div>
      </section>
    );
  }
}

export default RelatedBlogs;
