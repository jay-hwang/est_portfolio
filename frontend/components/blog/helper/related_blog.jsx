import React from 'react';

const RelatedBlog = ({ blog }) => {
  return (
    <div className='related-blog'>
      { blog.title }
    </div>
  );
};

export default RelatedBlog;
