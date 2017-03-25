import React from 'react';
import Tag from './tag';

class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.mapTags = this.mapTags.bind(this);
    this.hideTags = this.hideTags.bind(this);
    this.updateTagFilter = this.updateTagFilter.bind(this);

    this.tagFilters = {};
  }

  componentDidMount() {
    this.props.requestTaggings();
    this.props.requestTags();
  }

  mapTags() {
    if (Object.keys(this.props.tags).length === 0) { return; }
    return Object.keys(this.props.tags).map((id, i) => (
      <li key={i} className='tag-li'>
        <Tag tag={ this.props.tags[id] }
          isFilter={ this.props.isFilter }
          updateTagFilter={ this.updateTagFilter }
          createTagging={ this.props.createTagging } />
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

  hideTags() {
    $('.tags-box').slideUp();
  }

  render() {
    let tags = this.mapTags();

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
