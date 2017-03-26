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
    this.props.requestTaggings(this.props.blog.id);
    this.props.requestTags();
  }

  componentDidUpdate() {
    // console.log('taggings form updated');
  }

  mapBlogTagIds() {
    this.blogTagIds = {};
    this.props.blog.tags.forEach(tag => {
      this.blogTagIds[tag.id] = tag.id;
    });
  }

  mapTaggingsByTagId() {
    this.taggingsTags = {};
    Object.keys(this.props.taggings).forEach(taggingId => {
      let tagging = this.props.taggings[taggingId];
      this.taggingsTags[tagging.tag.id] = tagging;
    });
  }

  mapTags() {
    if (Object.keys(this.props.taggings).length > 0 &&
        Object.keys(this.props.tags).length > 0) {
      this.mapTaggingsByTagId();
      let blogTagIds = this.blogTagIds;

      return Object.keys(this.props.tags).map((id, i) => {
        let isActive = blogTagIds[id] ? true : false;
        return (
          <li key={i}>
            <Tagging tag={ this.props.tags[id] }
              tagging={ this.taggingsTags[id] }
              blog={ this.props.blog }
              isActive={ isActive }
              requestBlog={ this.props.requestBlog  }
              createTagging={ this.props.createTagging }
              deleteTagging={ this.props.deleteTagging } />
          </li>
        );
      });
    }
  }

  render() {
    this.mapBlogTagIds();
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
