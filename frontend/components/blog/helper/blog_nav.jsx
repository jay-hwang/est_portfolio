import React from 'react';
import { withRouter } from 'react-router';

const Previous = ({ previous }) => {
  if (!previous) {
    return (
      <div></div>
    );
  } else {
    return (
      <div className='bn-btn'>
        <h7 className='bn-head'>PREVIOUS BLOG</h7>
        <div className='bn-content'>
          <div className='arrow'>
            { '<' }
          </div>
          <div className='bn-blog-head'>
            { previous.title }
          </div>
        </div>
      </div>
    );
  }
};

const Next = ({ next }) => {
  if (!next) {
    return (
      <div></div>
    );
  } else {
    return (
      <button className='bn-btn'>
        <h7 className='bn-head'>NEXT BLOG</h7>
        <div className='bn-content'>
          <div clasName='bn-blog-head'>
            { next.title }
          </div>
          <div className='arrow'>
            { '>' }
          </div>
        </div>
      </button>
    );
  }
};

const BlogNav = props => {
  return (
    <div className='blog-nav'>
      <Previous previous={ props.previous } />
      <Next next={ props.next } />
    </div>
  );
};

export default withRouter(BlogNav);
