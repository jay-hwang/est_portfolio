import React from 'react';
import Tagging from './tagging';

class TaggingsForm extends React.Component {
  constructor(props) {
    super(props);

    this.mapTags = this.mapTags.bind(this);
    this.mapBlogTagIds = this.mapBlogTagIds.bind(this);
    this.mapTaggingsByTagId = this.mapTaggingsByTagId.bind(this);
  }

  componentDidMount() {
    this.props.requestTags();
    if (!this.props.isNew) { this.props.requestTaggings(this.props.blogId); }
  }

  mapBlogTagIds() {
    let blogTagIds = {};
    if (this.props.isNew) { return {}; }
    Object.keys(this.props.taggings).forEach(taggingId => {
      let tag = this.props.taggings[taggingId].tag;
      blogTagIds[tag.id] = tag.id;
    });
    return blogTagIds;
  }

  mapTaggingsByTagId() {
    let taggingsByTagId = {}, propsTaggings = this.props.taggings;
    Object.keys(propsTaggings).forEach(taggingId => {
      let tagging = propsTaggings[taggingId];
      taggingsByTagId[tagging.tag.id] = tagging;
    });
    return taggingsByTagId;
  }

  mapTags() {
    if (Object.keys(this.props.tags).length > 0 &&
      (this.props.isNew || Object.keys(this.props.taggings).length > 0))  {

      let blogTagIds = this.mapBlogTagIds(),
          taggingsByTagId = this.mapTaggingsByTagId(),
          queueTaggingAction = this.props.queueTaggingAction;

      return Object.keys(this.props.tags).map((tagId, i) => {
        let isActive = blogTagIds[tagId] ? true : false;

        return (
          <li key={i}>
            <Tagging tag={ this.props.tags[tagId] }
              tagging={ taggingsByTagId[tagId] }
              blogId={ this.props.blogId }
              isActive={ isActive }
              queueTaggingAction={ queueTaggingAction } />
          </li>
        );
      });
    }
  }

  render() {
    let taggings = this.mapTags();

    return (
      <div className='taggings-box'>
        <h3 className='tagging-header'>TAGS</h3>
        <div className='taggings'>
          { taggings }
        </div>
      </div>
    );
  }
}

export default TaggingsForm;
