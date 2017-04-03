import React from 'react';
import TagsContainer from '../tag/tags_container';

class BlogFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  showTags() {
    $('.filters-mobile').fadeOut();
    $('.tags-box-mobile').slideDown();
  }

  render() {
    if (!this.props.isMobile) {
      return (
        <div className='filters'>
          <TagsContainer isFilter={ true }
            requestBlogs={ this.props.requestBlogs } />
        </div>
      );
    } else {
      return (
        <div>
          <div className='filters-mobile' onClick={ this.showTags }>
            <button className='show-tags btn'>
              TAGS

              <div className='mini-burger'>
                <span className='mini-burger-slab'></span>
                <span className='mini-burger-slab'></span>
                <span className='mini-burger-slab'></span>
              </div>
            </button>

          </div>
          <TagsContainer isFilter={ true }
            requestBlogs={ this.props.requestBlogs } />
        </div>
      );
    }
  }
}

export default BlogFilter;
