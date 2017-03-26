import React from 'react';

const RelatedBlog = ({ blog }) => {
  if (blog) {
    return (
      <div className='related-blog'>
        <div className='related-blog-img'>

        </div>
        <p className='related-blog-text'>
          { blog.title }
        </p>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default RelatedBlog;
