import React from 'react';
import Tag from './tag';

class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.mapTags = this.mapTags.bind(this);
    this.mapBlogTags = this.mapBlogTags.bind(this);
    this.updateTagFilter = this.updateTagFilter.bind(this);

    this.tagFilters = {};
  }

  componentDidMount() {
    if (!this.props.isBlogTags) {
      // this.props.requestTaggings();
      this.props.requestTags();
    }
  }

  mapBlogTags() {
    // Check value of this.props.blog.tags.map
    return this.props.blog.tags.map((tag, i) => (
      <li key={i} className='tag-li'>
        <Tag tag={ tag }
          isFilter={ this.props.isFilter } />
      </li>
    ));
  }

  mapTags() {
    if (Object.keys(this.props.tags).length === 0) { return; }
    return Object.keys(this.props.tags).map((id, i) => (
      <li key={i} className='tag-li'>
        <Tag tag={ this.props.tags[id] }
          blog={ this.props.blog }
          isFilter={ this.props.isFilter }
          updateTagFilter={ this.updateTagFilter } />
      </li>
    ));
  }

  updateTagFilter(tag, isActive) {
    if (isActive) {
      delete this.tagFilters[tag.name];
    } else {
      this.tagFilters[tag.name] = tag.name;
    }
    this.props.requestBlogs(Object.keys(this.tagFilters));
  }

  render() {
    let tags = this.props.isBlogTags ? this.mapBlogTags() : this.mapTags();

    return (
      <div className='tags-box'>
        <h3 className='tag-header'>TAGS</h3>
        <div className='tags'>
          { tags }
        </div>
      </div>
    );
  }
}

export default Tags;
