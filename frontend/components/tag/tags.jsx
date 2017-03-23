import React from 'react';
import Tag from './tag';

class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.mapTags = this.mapTags.bind(this);
    this.isActive = this.isActive.bind(this);
    this.hideTags = this.hideTags.bind(this);

    this.blogTags = {};
    props.blog.tags.forEach(tag => { this.blogTags[tag.id] = tag; });
  }

  componentDidMount() {
    this.props.requestTaggings();
    this.props.requestTags();
  }

  isActive(tag) {
    return this.blogTags[tag.id] ? true : false;
  }

  mapTags() {
    if (Object.keys(this.props.tags).length === 0) { return; }
    return Object.keys(this.props.tags).map((id, i) => (
      <li key={i} className='tag-li'>
        <Tag tag={ this.props.tags[id] }
          isActive={ this.isActive(this.props.tags[id]) }
          createTagging={ this.props.createTagging }
          blog={ this.props.blog } />
      </li>
    ));
  }

  hideTags() {
    $('.tags-box').slideUp();
  }

  render() {
    let tags = this.mapTags();

    return (
      <div className='tags-box position-relative display-none'>
        <div className='exit' onClick={ this.hideTags }>x</div>
        <div className='tags'>
          { tags }
        </div>
      </div>
    );
  }
}

export default Tags;
