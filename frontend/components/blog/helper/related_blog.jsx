import React from 'react';
import { withRouter } from 'react-router';

const RelatedBlog = ({ blog, router }) => {
  const handleClick = () => {
    router.push(`/blogs/${blog.id}`);
    window.scrollTo(0,0);
  };

  if (blog) {
    return (
      <div className='related-blog' onClick={ handleClick }>
        <div className='related-blog-img'>
          <img className='related-blog-img-content' src={ blog.image_url } />
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

export default withRouter(RelatedBlog);
