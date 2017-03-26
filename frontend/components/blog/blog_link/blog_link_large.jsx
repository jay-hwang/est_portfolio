import React from 'react';

const BlogLinkLarge = props => {
  return (
    <div className='blog-content'>
      <div className='blink-img'>

      </div>

      <div className='blink-intro'>
        <span className='blink-title'>{ props.blog.title }</span>
        <p className='blink-body'>
          { props.blog.body.substring(0, 400) }...
        </p>
        <button className='blink-more btn' onClick={ props.handleBlogShow }>
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default BlogLinkLarge;
