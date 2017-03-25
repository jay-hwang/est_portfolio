import React from 'react';
import TagsContainer from '../tag/tags_container';

class BlogFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='filters'>
        <TagsContainer isFilter={ true }
          requestBlogs={ this.props.requestBlogs } />
      </div>
    );
  }
}

// <button className='btn show-tags'
//   onClick={ this.showTags }>ADD TAGS
// </button>
// <TagsContainer blog={ blog } />

export default BlogFilter;
